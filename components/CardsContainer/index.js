import React from 'react';
import { CardsContainerWrapper } from './styled';
import Card from 'components/Card';
import CardWithImage from 'components/CardWithImage';

const CardsContainer = () => {
  return (
    <CardsContainerWrapper>
      <CardWithImage></CardWithImage>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardsContainerWrapper>
  );
};

export default CardsContainer;