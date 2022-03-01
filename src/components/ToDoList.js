import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import ToDoForm from "./ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/slices/todosSlice";

function ToDoList() {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos.todosList);

  const handleDelte = (index) => {
    dispatch(deleteTodo({ index }));
  };
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <ToDoForm />
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          my={2}
          flexDirection="column"
          alignItems="center"
          gap={2}
          maxWidth={580}
          mx="auto"
        >
          {todosList.map((item, index) => (
            <Box
              key={`${item}-${index}`}
              display="flex"
              justifyContent="space-between"
              width="100%"
            >
              <div>
                <Typography variant="h5" color="initial">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="initial">
                  {item.description}
                </Typography>
              </div>

              <div>
                <Button
                  onClick={() => handleDelte(index)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </div>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ToDoList;
