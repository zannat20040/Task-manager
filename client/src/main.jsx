import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./AuthProvider.jsx/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import DashBoard from "./Dashboard/DashBoard";
import CreateTask from "./Dashboard/CreateTask";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ManageTask from "./Dashboard/ManageTask";
const queryClient = new QueryClient();
import scrollAnimation from '../scrollanimation'

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
        element: (
          <PrivateRoute>
            <div>help</div>
          </PrivateRoute>
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
        element: <ManageTask></ManageTask>,
      },
      {
        path: "create",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "manage",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "notification",
        element: <ManageTask></ManageTask>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </DndProvider>
  </React.StrictMode>
);
