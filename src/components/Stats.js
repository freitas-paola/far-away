export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding items to your packing list 💼</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything ready to go! ✈️"
        : `💼 You have ${numItems} items on your list, and you already packed
      ${numPacked} (${percentage}%)`}
    </footer>
  );
}