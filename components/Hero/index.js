import React from 'react';
import { HeroWrapper, HeroRow, Title, Subtitle, Logo, Mailto } from './styled';
import { AppContext } from '/modules/state';
import getTranslation from '/modules/translations';
import LogoImg from '/static/img/auth0-badge.svg';

const HeroLogo = ({src, title}) => {
  return (
    <Logo>
      <div>
        <LogoImg title={title} />
      </div>
    </Logo>  
  );
};

const Hero = () => {
  return (
    <AppContext.Consumer>
    {({ translations }) => {
      return (
        <HeroWrapper>
          <HeroRow>
            <HeroLogo title={getTranslation(translations, 'press_and_media_resources')} />
            <Title>
              {getTranslation(translations, 'press_and_media_resources')}
            </Title>
            <Subtitle>
              {getTranslation(translations, 'for_press_and_media_enquires_contact')}
              &nbsp;<Mailto href="mailto:press@auth0.com">press@auth0.com</Mailto>
            </Subtitle>
          </HeroRow>
        </HeroWrapper>
      )
    }}
    </AppContext.Consumer>
  );
};

export default Hero;