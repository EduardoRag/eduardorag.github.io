import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);