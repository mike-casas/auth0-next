require('dotenv').config();
const express = require('express');
const next = require('next');
const createLocaleMiddleware = require('express-locale');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const {  
  initTranslations,
  getTranslation,
  getLanguageTranslations
} = require('i18n-translations');

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const invalidationUrl = process.env.INVALIDATION_URL;
const languages = ["es", "en-US"];

const langMiddleware = async (req, res, next) => {
  const currentLanguage = req.locale.language ? req.locale.language : 'en';
  const currentTranslations = await getLanguageTranslations(currentLanguage);
  const fallbackTranslations = await getLanguageTranslations('en-US');
  req.translations = { currentTranslations, fallbackTranslations };
  next();
};

app.prepare()
.then(() => {
  initTranslations({
    space,
    accessToken,
    invalidationUrl,
    languages
  }).then( () => {
    const server = express();
    server.use(createLocaleMiddleware());
    server.use(langMiddleware);

    server.get('*', (req, res) => {
      return handle(req, res)
    })
  
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  });
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})