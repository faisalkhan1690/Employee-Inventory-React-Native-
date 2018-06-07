import { AppRegistry } from 'react-native';
import React from 'react';
import RootReducer from './src/services/rootreducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './App';


export const store = createStore(
    RootReducer,
    undefined,
    applyMiddleware(thunk),
  );

  const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent('employeeinventory', () => ReduxApp);
