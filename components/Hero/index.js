import React from 'react';
import { HeroWrapper, Title, Subtitle, ImageWrapper, Image } from './styled';

const Hero = () => {
  return (
    <HeroWrapper>
      <ImageWrapper>
        <Image src="https://cdn.auth0.com/website/assets/pages/press/img/auth0-badge-5c9de7e409.svg"/>
      </ImageWrapper>
      <Title>
        Press & Media Resources
      </Title>
      <Subtitle>
        For Press & Media enquiries contact press@auth0.com
      </Subtitle>
    </HeroWrapper>
  );
};

export default Hero;