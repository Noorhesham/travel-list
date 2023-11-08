export default function Item({ i, OnDelteItem, OnToggle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => OnToggle(i.id)} value={i.packed} />
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>
        {i.quantity} {i.description}
      </span>
      <button onClick={() => OnDelteItem(i.id)}>❌</button>
    </li>
  );
}
