import { useState } from "react";
function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddItem;
