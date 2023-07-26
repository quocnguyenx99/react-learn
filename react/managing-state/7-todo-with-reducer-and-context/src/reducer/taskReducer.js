export const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "add_task": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed_task": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted_task": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw new Error("Unknow action : " + action.type);
    }
  }
}
