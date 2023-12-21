import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Login from "./Login/Login";
import LoginForm from "./Login/LoginForm";
import Register from "./Register/Register";
import AuthProvider from "./AuthProvider.jsx/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "/help",
        element: <PrivateRoute><div>help</div></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signin",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><div>dashbrd</div></PrivateRoute>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
