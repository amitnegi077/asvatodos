import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const token = useSelector((state) => state.user.token);
  const authToken = token;
  return authToken ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
