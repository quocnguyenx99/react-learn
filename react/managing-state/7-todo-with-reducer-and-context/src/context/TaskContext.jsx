import { createContext, useContext, useReducer } from "react";
import taskReducer, { initialTasks } from "../reducer/taskReducer";

export const TasksContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}
