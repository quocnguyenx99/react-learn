import { useContext, useState } from "react";
import Task from "./Task";
import { useTasks } from "../context/TaskContext";
function TaskList({ onChangeTask, onDeleteTask }) {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
