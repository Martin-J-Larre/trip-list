import { useState } from "react";
import { Logo, Form, PakingList, Stats } from "./components";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PakingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
