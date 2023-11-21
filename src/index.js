import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query' 
import { Provider } from 'react-redux';
import store from './store';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient= new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
     <ReactQueryDevtools initialIsOpen={true} />
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>

);

reportWebVitals();
