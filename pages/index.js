
import React from 'react';
import Layout from '/components/Layout';
import Hero from '/components/Hero';
import { AppContext } from '/modules/state';
export default class extends React.Component {
  
  static getInitialProps({ req }) {
    const translations = req ? req.translations : [];
    return { translations };
  }

  render() {
    const state = {
      translations: this.props.translations
    };
    
    return ( 
    <AppContext.Provider value={state}>  
      <Layout>
        <Hero />
      </Layout>
    </AppContext.Provider>
    );
  }
}
