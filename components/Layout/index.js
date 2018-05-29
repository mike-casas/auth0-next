import Head from 'components/Head';
import { Fragment } from 'react';

const Layout = ({ children }) =>
  <div>
    <Head/>
    {children}
    <style global jsx>{`
      body {
        font-family: fakt-web,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;
      }
     `}</style>
  </div>

export default Layout;