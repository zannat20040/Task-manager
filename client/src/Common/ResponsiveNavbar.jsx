import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { BiTask } from "react-icons/bi";

const ResponsiveNavbar = () => {
  const { user, passwordSignOut } = useContext(AuthContext);

  const HandleLogout = () => {
    passwordSignOut()
      .then(() => {
        swal("Good job!", "Logged out successfully!", "success");
      })
      .catch((error) => {
        swal("Opps!", error, "error");
      });
  };

  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "active" : "pending",
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
        <NavLink
          to="/dashboard"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "active" : "pending",
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
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "active" : "pending",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to='/login'
            onClick={HandleLogout}
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "active" : "pending",
              };
            }}
            className={({ isActive, isPending }) => {
              return isActive ? "active" : isPending ? "pending" : "";
            }}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink to='/login'
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "active" : "pending",
              };
            }}
            className={({ isActive, isPending }) => {
              return isActive ? "active" : isPending ? "pending" : "";
            }}
          >
            Register/Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="w-full shadow z-50 bg-white sticky top-0">
      <div className="navbar justify-between  container mx-auto px-4">
        <div className="navbar-start ">
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
              className="navmenu shadow rounded-none menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100  w-52"
            >
              {navList}
          
            </ul>
          </div>
        <BiTask className="hidden lg:flex text-4xl text-cyan-500"/>
        </div>

          <BiTask className="flex lg:hidden text-4xl text-cyan-500"/>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu navmenu menu-horizontal px-1">
            {navList}
           
          </ul>

        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
