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
- - The Reason is `selectedItem` variable is local to `ListGroup` component. This is like little secret inside component. So React isn't aware of when it's value change. 
- To solve this issue we should tell react that this component  is going to have data/state that might change over time.
- To do that we have to use one of in built function in React called `useState`. Prior to use it we must import.
  ``` tsx 
  import { useState } from "react";
  ```
- `useState` is a example for a Hook in React.
- Hook is a function that allows us to tap into built in features in React.
- Using the `useState`hook we can tell react that this component has data/state that will change overtime.
- So instead of declaring a variable, we are going to call `useState` function with passing the initial value of variable want to be and the `useState` returns an array.
  ``` tsx 
  const arr = useState(-1)
  ```
- In this `arr` we are going to have 2 elements. 1st element is going to be a value which passed in to `useState`. And 2nd element is going to be updater function.
  ``` tsx 
  const arr = useState(-1);
  arr[0] //variable like SelectedIndex value with -1
  arr[1] //updater function
  ```
- Using updater function we can update `arr[0]` variable. At that point React will be notified. So React knows that the state/data of our component is changed. And then React will re render our component which cause the DOM to update under the hood.
  ``` tsx 
  import { useState } from "react";

  function ListGroup() {
    const arr = useState(-1);
    console.log(arr[0]); //-1 at initial rendering
    return (
      <>
        ...
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
        ...
    );
  }
  ```