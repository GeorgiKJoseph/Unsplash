import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux"
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import rootSaga from './sagas/dataListener'

import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
