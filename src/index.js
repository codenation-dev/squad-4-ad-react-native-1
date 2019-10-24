import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './services/apollo';

import './config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

export default function src() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#ED4420" />
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}
