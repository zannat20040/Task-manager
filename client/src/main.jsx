import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './Root';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    child:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/dashboard",
        element: <div>dashbrd</div>
      },
      {
        path: "/help",
        element: <div>help</div>
      },
      {
        path: "/login",
        element: <div>login</div>
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
