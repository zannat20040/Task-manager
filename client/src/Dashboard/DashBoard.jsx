import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex  flex-col ">
        <div className="navbar shadow-lg flex justify-between md:justify-end bg-base-100 sticky top-0 z-30">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-cyan-400  drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="">
            <a className="text-base mr-3">{user?.displayName}</a>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side shadow-2xl">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className=" bg-white z-50  min-h-full w-72 pt-5">
          <a className=" block text-2xl mx-5 mb-10 text-center  font-semibold rounded-badge text-black bg-cyan-400 py-4 px-2 ">
            Task Manager
          </a>
          <ul className="menu sidemenu  p-0 flex flex-col gap-1 pr-5 text-base-content ">
            {/* Sidebar content here */}

            <li>
              <NavLink
                to="create"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "active" : "pending",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active  " : isPending ? "pending" : "";
                }}
              >
                Create Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="manage"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "active" : "pending",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active " : isPending ? "pending" : "";
                }}
              >
                Manage Task
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
