import React from 'react';
import {
  CardWrapper,
  CardDate,
  CardTitle,
  CardFigure,
  CardDetails,
  CardArticle,
  CardImage } from './styled';

const CardWithImage = () => {
  return (
    <CardWrapper>
      <CardArticle>
        <CardFigure>
          <CardImage src="https://cdn.auth0.com/blog/series-c/auth0-logo.png" alt=""/>
        </CardFigure>
        <CardDetails>
          <CardDate>May 08, 2018</CardDate>
          <CardTitle>Auth0 Joins Decentralized Identity Foundation</CardTitle>
        </CardDetails>
      </CardArticle>
    </CardWrapper>
  );
};

export default CardWithImage;