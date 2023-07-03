import React from "react";

export const Item = ({ quantity, description, packed }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};
