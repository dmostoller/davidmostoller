import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './error-page.jsx';
import 'semantic-ui-css/semantic.min.css';
import MusiciansBase from './components/MusiciansBase.jsx';
import HomepageLayout from './components/HomepageLayout.jsx';
import TutorBot from './components/TutorBot.jsx';
import SocialPortfolio from './components/SocialPortfolio.jsx';
import MarsBase from './components/MarsBase.jsx';
import SpaceJ from './components/SpaceJ.jsx';
import TaskMaster from './components/TaskMaster.jsx';
import PhilaReact from './components/PhilaReact.jsx';
import BlogFeed from './components/BlogFeed.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomepageLayout />
      },
      {
        path: '/musicians-base',
        element: <MusiciansBase />
      },
      {
        path: '/tutorbot',
        element: <TutorBot />
      },
      {
        path: '/social-portfolio',
        element: <SocialPortfolio />
      },
      {
        path: '/mars-base',
        element: <MarsBase />
      },
      {
        path: '/band-website',
        element: <SpaceJ />
      },
      {
        path: '/taskmaster',
        element: <TaskMaster />
      },
      {
        path: '/philareact',
        element: <PhilaReact />
      },
      {
        path: '/blog',
        element: <BlogFeed />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
