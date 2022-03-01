import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ToDoList from "./components/ToDoList";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todos-list" element={<ToDoList />} />
        </Route>
      </Routes>
    </>
  );
}

export default CustomRoutes;
