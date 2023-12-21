import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <span className="loading loading-ring loading-md block justify-center py-9"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ redirectTo: location.pathname }}
      to="/login"
    ></Navigate>
  );
};

export default PrivateRoute;
