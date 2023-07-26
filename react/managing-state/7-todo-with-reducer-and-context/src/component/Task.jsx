import { useContext, useState } from "react";
import { useTasks, useTasksDispatch } from "../context/TaskContext";

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed_task",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            dispatch({
              type: "changed_task",
              task: {
                ...task,
                done: e.target.checked,
              },
            })
          }
        />
        {taskContent}
        <button
          onClick={() =>
            dispatch({
              type: "deleted_task",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </>
  );
}

export default Task;
