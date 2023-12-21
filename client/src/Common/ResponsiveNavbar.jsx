import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveNavbar = () => {
  const navList = (
    <>
      <li>
        <NavLink to='/'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "inherit",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to='/dashboard'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "" : "",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to='/help'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "" : "",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Help
        </NavLink>
      </li>
      <li>
        <NavLink to='/login'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "inherit",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Register/Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-lg ">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <a className="text-2xl font-bold text-teal-500">
            Task Manager
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
