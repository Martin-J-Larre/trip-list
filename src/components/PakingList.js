import { Item } from "./Item";

export const PakingList = ({ items, onDeletedItem, handleToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDeletedItem={onDeletedItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};
