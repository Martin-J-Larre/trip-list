import { useState } from "react";
import { Logo, Form, PakingList, Stats } from "./components";

function App() {
  const [items, setItems] = useState([]);

  const quantityItems = items.length;
  const quantityPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((quantityPacked / quantityItems) * 100);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PakingList
        items={items}
        onDeletedItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
      <Stats
        quantityItems={quantityItems}
        quantityPacked={quantityPacked}
        percentage={percentage}
      />
    </div>
  );
}

export default App;
