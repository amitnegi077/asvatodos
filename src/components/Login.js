import { Paper, TextField, Button, Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../redux/slices/userSlice";

function Login() {
  const authToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(setToken("testToken"));
    navigate("/todos-list");
  };

  useEffect(() => {
    if (authToken !== null) {
      navigate("/todos-list");
    }
  }, [authToken]);

  return (
    <Grid container spacing={2} alignItems="center" height="90vh">
      <Grid item xs={12}>
        <Paper sx={{ maxWidth: 400, mx: "auto", p: 4 }} elevation={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField id="username" label="User Name" />
            <TextField id="password" label="Password" />
            <Button onClick={handleLogin} variant="contained">
              Login
            </Button>
          </Box>
          <Box mt={2}>
            <Typography variant="caption" color="initial">
              *It is a dummy login
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
