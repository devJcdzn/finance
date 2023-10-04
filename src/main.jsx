import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home/Home.jsx';
import Statics from './routes/Statics/Statics.jsx';
import Clients from './routes/Clients/Clients.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/statics',
        element: <Statics />
      },
      {
        path: '/clients',
        element: <Clients />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
