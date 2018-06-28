import React from 'react';
import { HeroWrapper, Title, Subtitle } from './styled';
import { AppContext } from '/modules/state';
import getTranslation from 'modules/translations';

const Hero = () => {
  return (
    <AppContext.Consumer>
    {({ translations }) => {
      console.log(translations);
      return (
        <HeroWrapper>
          <Title>
            {getTranslation(translations, 'press_and_media_resources')}
          </Title>
          <Subtitle>
            {getTranslation(translations, 'for_press_and_media_enquires_contact')} press@auth0.com
          </Subtitle>
        </HeroWrapper>
      )
    }}
    </AppContext.Consumer>
  );
};

export default Hero;