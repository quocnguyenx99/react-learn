import { useContext, useState } from "react";
import { useTasksDispatch } from "../context/TaskContext";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <section className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "add_task",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </section>
  );
}
let nextId = 3;

export default AddTask;
