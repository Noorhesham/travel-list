import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  Dolist  from "./Dolist";
import  Stats  from "./Stats";

export default function App() {
  const [items, setitems] = useState([]);
  function addItem(item) {
    setitems((items) => [...items, item]);
  }
  function handleCheck(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleClear() {
    const confrmed = window.confirm(
      "Are you sure you want to delete all items?? "
    );
    if (confrmed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItem} />
      <Dolist
        items={items}
        OnDelteItem={handleDeleteItem}
        OnToggle={handleCheck}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
