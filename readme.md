# Conditional Rendering
- To conditionally render content, we can use an `if statement` or a `ternary` operator or `&&` operator.
#### 1. If statement
- Not much use because due to code duplication.
  ``` tsx 
  //ListGroup.tsx
  function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    items = [];
    if (items.length === 0)
      return (
        <>
          <h1>List</h1>
          <p>No item found</p>
        </>
      );
    return (
      <>
        <h1>List</h1>
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
  ```