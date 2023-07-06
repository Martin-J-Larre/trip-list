import { useState } from "react";
import { Logo, Form, PakingList, Stats } from "./components";

function App() {
  const [items, setItems] = useState([]);

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
      <Stats />
    </div>
  );
}

export default App;
