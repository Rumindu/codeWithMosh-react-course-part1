import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const arr = useState(-1);
  console.log(arr[0]); //-1 at initial rendering
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              // apply active class with conditional rendering
              index === arr[0] ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              // updating value of arr[0] using updater function
              arr[1](index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
