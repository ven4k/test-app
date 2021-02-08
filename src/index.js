import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Redux from 'redux';
import state from './redux/state.js';
import {addNewComment} from './redux/state.js';
import {subscribe} from './redux/state.js';

let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addNewComment={addNewComment} />
  </React.StrictMode>,
  document.getElementById('root')
);
}
reportWebVitals();
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
