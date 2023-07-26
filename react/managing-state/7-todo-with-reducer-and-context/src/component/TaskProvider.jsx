import { useReducer } from "react";
import { TasksContext, TaskDispatchContext } from "../context/TaskContext";
import taskReducer, { initialTasks } from "../reducer/taskReducer";

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default TaskProvider;
