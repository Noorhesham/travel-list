import { useState } from "react";
import  Item from "./Item";

export default function Dolist({ items, OnDelteItem, OnToggle, onClear }) {
  const [sort, setsort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "discription")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - Number(b.packed));
  if (sort === "quantity")
    sortedItems = items
      .slice()
      .sort((a, b) => +b.quantity - Number(a.quantity));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            i={item}
            key={item.id}
            OnDelteItem={OnDelteItem}
            OnToggle={OnToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setsort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="discription">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button onClick={onClear}>clear list</button>
      </div>
    </div>
  );
}
