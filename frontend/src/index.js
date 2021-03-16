import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import './bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose  ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productlistReducer from './store/reducer/productlist'


const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  Product: productlistReducer
})

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
