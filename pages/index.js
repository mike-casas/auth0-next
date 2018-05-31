
import React from 'react';
import Layout from '/components/Layout';
import Hero from '/components/Hero';
import CardsContainer from '/components/CardsContainer';
import Section from '/components/Section';
import SectionTitle from '/components/SectionTitle';
import Grid from '/components/Grid';
import { Heading, Button } from '@auth0/cosmos';
import { colors } from '@auth0/cosmos';

const Index = () => (
  <Layout>
    <Hero />
    <Section>
      <Grid>
        <SectionTitle>Announcements</SectionTitle>
        <CardsContainer></CardsContainer>
      </Grid>
    </Section>
  </Layout>
)

export default Index