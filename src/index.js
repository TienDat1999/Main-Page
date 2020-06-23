import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppProvider} from "./AppContext";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppProvider>
    <Router>
        <App />
    </Router>  
  </AppProvider>
  , 
    document.getElementById('root'));

serviceWorker.unregister();
