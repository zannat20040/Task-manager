import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { RiDragMove2Fill } from "react-icons/ri";
import { MdCreate } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";

const DashBoard = () => {
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
            <a className="text-base mr-3 text-cyan-300">{user?.displayName}</a>
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

        <div className=" bg-white z-50  min-h-full w-72 pt-5 flex flex-col justify-between">
          <div>
            <a className=" block text-2xl mx-5 mb-10 text-center  font-semibold rounded text-black bg-cyan-400 py-2 px-2 ">
              Task Manager
            </a>
            <ul className="menu sidemenu px-5 flex flex-col gap-1  ">
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
                    <MdCreate/> Create Task
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
                  <RiDragMove2Fill/> Manage Task
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className=" menu sidemenu flex flex-col gap-1 px-5 ">
            <li>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "active" : "pending",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active  " : isPending ? "pending" : "";
                }}
              >
                <IoHome/> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={HandleLogout}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "active" : "pending",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active " : isPending ? "pending" : "";
                }}
              >
                <PiSignOutBold/> Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
