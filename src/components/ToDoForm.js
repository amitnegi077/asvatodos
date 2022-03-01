import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todosSlice";

function ToDoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: title, description: description }));
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleAdd}>
      <Box display="flex" justifyContent="center" mt={5} gap={2}>
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          id="description"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </Box>
    </form>
  );
}

export default ToDoForm;
