import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import DonationDetails from './components/DonationDetails/DonationDetails.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Root from './components/Root/Root.jsx';
import ItemDetails from './components/ItemDetails/ItemDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <DonationDetails></DonationDetails>,
        loader: ()=>fetch('/donation.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/item/:id",
        element: <ItemDetails></ItemDetails>,
        loader: ()=> fetch('/donation.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
