function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items= [];
  return (
    <>
      <h1>List</h1>
      {/* if this condition is true return <p>No item found</p> */}
      {/* else return null, null means nothing would be render. */}
      {items.length === 0 ? <p>No item found</p> : null}
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

