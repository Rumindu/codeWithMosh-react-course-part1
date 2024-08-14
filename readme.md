# Fragment
- In solution 1 we added an extra one element for DOM only for the happiness of React. This is unnecessary. Better way is use fragment.
  - ### 2) Solution 2 - `<Fragment>`
  ``` tsx 
  //ListGroup.tsx
  //importing Fragment component
  import { Fragment } from "react";

  function ListGroup() {
    return (
      <Fragment>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          ...
        </ul>
      </Fragment> 
    );
  }
  ...
  ```