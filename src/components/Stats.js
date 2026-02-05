export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        {" "}
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🏖️"
          : `
        💼 You have ${totalItems} item on your list,and you already packed
        ${packedItems} (${percentage})%`}
      </em>
    </footer>
  );
}
