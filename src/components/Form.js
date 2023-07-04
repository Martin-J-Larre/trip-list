import { useState } from "react";

const selectQuantity = Array.from({ length: 20 }, (_, i) => i + 1);
const idGenerator = () => {
  return Math.trunc(Math.random()).toString(36) + Date.now().toString(36);
};

export const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleInput = ({ target }) => {
    setDescription(target.value);
  };

  const handleSelect = ({ target }) => {
    setQuantity(Number(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: idGenerator() };
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip?</h3>
      <select value={quantity} onChange={handleSelect}>
        {selectQuantity.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleInput}
      />
      <button>Add</button>
    </form>
  );
};
