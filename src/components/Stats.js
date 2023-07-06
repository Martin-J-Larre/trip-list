import React from "react";

export const Stats = ({ quantityItems, quantityPacked, percentage }) => {
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything! Ready to go!"
          : `You have ${quantityItems} items on your list, and you already packed ${quantityPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};
