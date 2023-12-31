import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./AuthProvider.jsx/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import DashBoard from "./Dashboard/DashBoard";
import CreateTask from "./Dashboard/CreateTask";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ManageTask from "./Dashboard/ManageTask";
const queryClient = new QueryClient();
import scrollAnimation from "../scrollanimation";
import About from "./About/About";

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
        path: "/about",
        element: (
          <About></About>
        ),
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
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <ManageTask></ManageTask>
          </PrivateRoute>
        ),
      },
      {
        path: "create",
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <PrivateRoute>
            <ManageTask></ManageTask>
          </PrivateRoute>
        ),
      },
      {
        path: "notification",
        element: (
          <PrivateRoute>
            <ManageTask></ManageTask>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);
