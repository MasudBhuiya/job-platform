import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import JobDetail from './component/JobDetail/JobDetail';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import cartProductsLoader from './loaders/cartProductsList';
import Statistics from './component/Statistics/Statistics';
import NoDataFound from './component/NoDataFound/NoDataFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/detail/:detailId',
        element: <JobDetail></JobDetail>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: cartProductsLoader
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '*',
        element: <NoDataFound></NoDataFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
