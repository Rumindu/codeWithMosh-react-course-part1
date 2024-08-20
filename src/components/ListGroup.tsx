//must be import
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Event handler
  //the job is handling the event in this case click events
  const handleClick=(event:MouseEvent)=>console.log(event)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            key={item}
            className="list-group-item"
            // don't put () when calling event handler
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
