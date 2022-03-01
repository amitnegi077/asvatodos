import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import CustomRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomRoutes />
      {/* <Login /> */}
      {/* <ToDoForm />
      <ToDoList /> */}
    </div>
  );
}

export default App;
