import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/slices/userSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.user.token);

  const handleLogout = () => {
    dispatch(removeToken());
    navigate("/todos-list");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My ToDos
          </Typography>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Typography variant="body1" color={isActive ? "#000" : "#fff"}>
                Home
              </Typography>
            )}
          </NavLink>
          {authToken && (
            <NavLink to="/todos-list" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Typography
                  mx={3}
                  variant="body1"
                  color={isActive ? "#000" : "#fff"}
                >
                  Todos
                </Typography>
              )}
            </NavLink>
          )}
          {authToken ? (
            <Button
              onClick={handleLogout}
              variant="text"
              sx={{ color: "#fff" }}
            >
              Logout
            </Button>
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Typography
                  ml={3}
                  variant="body1"
                  color={isActive ? "#000" : "#fff"}
                >
                  Login
                </Typography>
              )}
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
