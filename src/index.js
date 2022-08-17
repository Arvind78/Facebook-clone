import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App.js'
// import { StateProvider } from './componet/StateProvider';
// import Reducer,{ initialState } from './componet/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider  >
    <App />
    </StateProvider>
  </React.StrictMode>
);

 