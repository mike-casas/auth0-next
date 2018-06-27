
import React from 'react';
import Layout from '/components/Layout';
import Hero from '/components/Hero';
import { Heading, Button } from '@auth0/cosmos';
import { colors } from '@auth0/cosmos';


const Index = () => (
  <Layout>
    <Hero />
  </Layout>
)

export default class extends React.Component {
  
  static getInitialProps({ req }) {
    const translations = req ? req.translations : [];
    return { translations };
  }

  render() {
    console.log(this.props);
    return ( 
    <Layout>
      <Hero />
    </Layout>);
  }
}
