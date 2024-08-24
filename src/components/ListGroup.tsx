import { useState } from "react";
interface Props {
  items: string[];
  heading: string
}
function ListGroup(props:Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
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
