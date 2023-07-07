export const Item = ({
  quantity,
  description,
  packed,
  onDeletedItem,
  id,
  handleToggleItem,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handleToggleItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeletedItem(id)}>❌</button>
    </li>
  );
};
