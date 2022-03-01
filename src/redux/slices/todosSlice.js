import { createSlice } from "@reduxjs/toolkit";

export const todosSLice = createSlice({
  name: "todos",
  initialState: {
    todosList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todosList.unshift(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todosList.splice(action.payload.index, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todosSLice.actions;

export default todosSLice.reducer;
