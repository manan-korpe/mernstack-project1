import { createRoot } from 'react-dom/client'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import App from "./App.tsx";
import { HelmetProvider } from 'react-helmet-async';

//reducers 
import authReducers from "./redux/user.tsx";
import cartReducre from "./redux/cart.tsx";

const store = configureStore({
  reducer:{
    auth:authReducers,
    cart:cartReducre
  }
})
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
      <App/>
    </HelmetProvider>
    
  </Provider>,
)
