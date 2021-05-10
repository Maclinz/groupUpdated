import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import {AppProvider} from './context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    
    <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

