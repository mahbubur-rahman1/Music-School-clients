import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProviders from './AuthProviter/AuthProviders';
import {  HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="  mx-auto">
    <React.StrictMode>
      <AuthProviders>
        <HelmetProvider>
        <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
