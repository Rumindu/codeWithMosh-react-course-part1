import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

   //clicked item tracking variable
  // let selectedIndex = -1 means no item is clicked
  let selectedIndex = 0;// by default 1st item is clicked

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
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              // updating value of tracking variable
              selectedIndex = index;
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
