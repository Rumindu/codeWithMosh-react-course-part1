# Fragment
- ### 3) Solution 3 - <> </>
  - Don't need to import `Fragment` from React and just replace `<Fragment>` by `<>`. Here `Fragment` is represented by angle brackets(`<> </>`).

  ``` tsx 
  //ListGroup.tsx
  function ListGroup() {
  return (
      <>
      <h1>List</h1>
      <ul className="list-group">
          <li className="list-group-item">An item</li>
          ...
      </ul>
      </>
  );
  }

  export default ListGroup;
  ```