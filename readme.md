# Managing State
- We want to highlight item when it's clicked. To achieve that we add `active` class from bootstrap to the list item with a conditional rendering. Next we need a variable to track  on index of clicked list item. And need a function to set value of declared variable to the index of clicked item
  ``` tsx 
  function ListGroup() {
    //clicked item tracking variable
    // let selectedIndex = -1 means no item is clicked
    let selectedIndex = 0;// by default 1st item is clicked

    return (
      ...
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
    ...
    );
  }
  ```
- But clicked item isn't highlighting as we expected.