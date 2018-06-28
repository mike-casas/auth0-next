import NextHead from 'next/head';
import { AppContext } from '/modules/state';
import getTranslation from '/modules/translations';

const Head = () => (
  <AppContext.Consumer>
    {({ translations }) => (
      <div>
        <NextHead>
          <title>{getTranslation(translations, 'press_and_media_resources')}</title>
        </NextHead>
      </div>
    )}
  </AppContext.Consumer>
)

export default Head;