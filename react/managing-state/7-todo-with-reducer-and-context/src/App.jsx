import { useState, useReducer } from "react";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
