import { useState } from "react";
import { Logo, Form, PakingList, Stats } from "./components";
import Swal from "sweetalert2";

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

  const handleClearList = () => {
    if (!items.length) return;

    Swal.fire({
      title: "Are you sure you want to delete all items?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e5771f",
      cancelButtonColor: "#76c7ad",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
        Swal.fire({
          title: "Deleted!",
          text: "Your items have been deleted.",
          icon: "success",
          confirmButtonColor: "#e5771f",
        });
      }
    });
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PakingList
        items={items}
        onDeletedItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
