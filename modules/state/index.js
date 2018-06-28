import React from 'react';
import createReactContext from 'create-react-context';

export const AppContext = createReactContext({});
export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = AppContext.Provider;
export const withContextConsumer = Component => componentProps => (
  <AppContextConsumer>
    {providerProps => <Component {...componentProps} {...providerProps} />}
  </AppContextConsumer>
);

export default {
  AppContext,
  AppContextConsumer,
  AppContextProvider,
  withContextConsumer
};
