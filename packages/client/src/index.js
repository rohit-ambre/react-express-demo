import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import New from "./New";
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<BrowserRouter><New /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
