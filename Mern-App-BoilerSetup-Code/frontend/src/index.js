import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider i18n={enTranslations}>
  
    <BrowserRouter>
    
        <App />
       
        </BrowserRouter>
      
  </AppProvider>,
);



