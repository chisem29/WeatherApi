import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient } from '@tanstack/react-query';

import App from './App';

import './index.sass';
import QueryProvider from './providers/QueryProvider';

const targetQueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider client={targetQueryClient}>
      <App />
    </QueryProvider >
  </React.StrictMode>,
);
