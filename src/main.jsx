import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayouts from './Layouts/RootLayouts.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import AllApps from './Pages/AllApps.jsx';
import InstallesApp from './Pages/InstallesApp.jsx';
import AppDetails from './Pages/AppDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <span>loading... </span>,
    children:[
      {
        index: true,
        Component: Home,
        loader: () => fetch('./appData.json')
      },
      {
        path:"/allApps",
        Component: AllApps
      },
      {
        path:"/installedApp",
        Component: InstallesApp,
      },
      {
        path:"/allApps/:id",
        Component: AppDetails
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
