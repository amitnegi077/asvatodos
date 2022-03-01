import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const authToken = useSelector((state) => state.user.token);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
      height="90vh"
    >
      <Typography variant="h4" color="initial">
        Welcome to My Todos
      </Typography>

      {authToken ? (
        <Typography variant="body1" color="initial">
          Create Todos <Link to="/todos-list">here</Link>
        </Typography>
      ) : (
        <Typography variant="body1" color="initial">
          Please <Link to="/login">login</Link> to create todos
        </Typography>
      )}
    </Box>
  );
}

export default Home;
