export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }

  const quantityItems = items.length;
  const quantityPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((quantityPacked / quantityItems) * 100);

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
