function Letter({ letter, onHover, onToggleStar, isHighlighted }) {
  return (
    <li
      style={isHighlighted ? { backgroundColor: "#d2eaff" } : null}
      onFocus={() => onHover(letter.id)}
      onPointerMove={() => onHover(letter.id)}
    >
      <button onClick={() => onToggleStar(letter.id)}>
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}

export default Letter;
