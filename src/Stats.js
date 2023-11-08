export  default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items into your packing list 🚀👨‍🚀</em>
      </p>
    );
  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numItems) * 100);
  console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `you are good to go ✈️🌍`
          : `👜💼 you have ${numItems} items in your list  and you have already packed ${packed} (${percentage}%)`}
      </em>
    </footer>
  );
}
