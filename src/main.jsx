import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './error-page.jsx';
import Project from './MusiciansBase.jsx'
import 'semantic-ui-css/semantic.min.css'
import MusiciansBase from './MusiciansBase.jsx';
import HomepageLayout from './HomepageLayout.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <HomepageLayout />,
        },
        {
          path: "/musicians-base",
          element: <MusiciansBase />,
        },
      ]
    },
  
  ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
