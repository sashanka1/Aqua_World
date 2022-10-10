import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CatagoryContextProvider } from './context/catagorycontext';
import {BrowserRouter} from "react-router-dom";
import {CartCountContextProvider} from "./context/cart_count_context";
import{IsuserContextProvider} from "./context/isoth.context"
import { SearchContextProvider } from './context/search_context';
import { SerchThisContextProvider } from './context/search_this_product.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
      <SerchThisContextProvider>
    <SearchContextProvider>
    <IsuserContextProvider>
    <CartCountContextProvider>
    <CatagoryContextProvider>
    <App />
    </CatagoryContextProvider>
    </CartCountContextProvider>
    </IsuserContextProvider>
    </SearchContextProvider>
    </SerchThisContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
