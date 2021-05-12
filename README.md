# How to start?

```
npm install
```

library installed

- axios
- classnames
- react-redux
- redux
- redux-devtools-extension
- redux-persist

-----

## index.js
```

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Routes from './Routes';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './config/store';
const {store, persistor} = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate laoding={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();


```

## src/config/store.js 
```
import reducers from '../reducers';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const enhancedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
  const store = createStore(
    enhancedReducer,
    {},
    composeWithDevTools(),
  );
  const persistor = persistStore(store);
  return {store, persistor};
}

```