import { useState } from "react";
import { Item, SortItems } from "./";

export const PakingList = ({
  items,
  onDeletedItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const handleSortBy = ({ target }) => {
    setSortBy(target.value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDeletedItem={onDeletedItem}
            handleToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <SortItems
        sortBy={sortBy}
        handleSortBy={handleSortBy}
        onClearList={onClearList}
      />
    </div>
  );
};
