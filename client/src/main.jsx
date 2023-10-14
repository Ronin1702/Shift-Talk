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
        path: '/OrderHistory',
        element: <OrderHistory />,
      },
      {
        path: '/products/:id',
        element: <Detail />,
      },
    ],
  },
]);


window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e

  showAddToHomeScreen()
})

function showAddToHomeScreen() {

  var a2hsBtn = document.querySelector(".ad2hs-prompt");

  // @ts-ignore
  a2hsBtn.style.display = "block";

  // @ts-ignore
  a2hsBtn.addEventListener("click", addToHomeScreen);

}

function addToHomeScreen() {  var a2hsBtn = document.querySelector(".ad2hs-prompt");  // hide our user interface that shows our A2HS button
  // @ts-ignore
  a2hsBtn.style.display = 'none';  // Show the prompt
  deferredPrompt.prompt();  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
  // @ts-ignore
      .then(function(choiceResult){

          if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
          } else {
              console.log('User dismissed the A2HS prompt');
          }

          deferredPrompt = null;

      });}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
