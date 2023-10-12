import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Error from './pages/Error.jsx';
import Me from './pages/Me.jsx';
import Pros from './pages/Pros.jsx';
import Success from './pages/Success.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import Detail from './pages/Detail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/me',
        element: <Me />,
      },
      {
        path: '/pros',
        element: <Pros />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/orderHistory',
        element: <OrderHistory />,
      },
      {
        path: '/products/:id',
        element: <Detail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
