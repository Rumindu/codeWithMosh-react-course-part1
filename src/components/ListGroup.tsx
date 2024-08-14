function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          // Here we can use item as unique key,
          //Because each item is unique String
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
