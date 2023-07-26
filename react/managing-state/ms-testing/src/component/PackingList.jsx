function PackingList({ items, onChangeItem, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{" "}
            {item.title}
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default PackingList;
