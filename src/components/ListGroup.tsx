function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items= [];
  //store condition in variable
  const message = items.length === 0 ? <p>No item found</p> : null

  return (
    <>
      <h1>List</h1>
      {/*render the constant*/}
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

