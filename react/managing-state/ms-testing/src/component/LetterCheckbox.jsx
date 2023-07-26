function LetterCheckBox({ letter, isSelected, onToggle }) {
  return (
    <li style={isSelected ? { backgroundColor: "#d2eaff" } : null}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(letter.id)}
        />
        {letter.subject}
      </label>
    </li>
  );
}

export default LetterCheckBox;
