# Handle events
- Here we see handle **Click event** on the component.
- Clicked on each item of the list and get a out put in the console. In React each html has property called `onClick`.
  ``` jsx 
  <li
      key={item}
      className="list-group-item"
      onClick={() => console.log("Clicked")}
    >
  ```
  ![](assets/Pasted%20image%2020240820192554.png)
- Need to get clicked item name on console
  ``` tsx 
  {items.map((item) => (
    <li
      key={item}
      className="list-group-item"
      onClick={() => console.log(item)}
    >
      {item}
    </li>
  ))}
  ```
  ![](assets/Pasted%20image%2020240820195805.png)
- When we mapping an items we can optionally add second parameter as `index`. From this we can see index of item we clicked.
  ``` tsx 
  {items.map((item,index) => (
    <li
      key={item}
      className="list-group-item"
      onClick={() => console.log(item,index)}
    >
      {item}
    </li>
  ))}
  ```
  ![](assets/Pasted%20image%2020240820205704.png)
- Arrow function, which is calling on `onClick` can optionally has parameter that represent browser event. We can called it `e` or `event`. let's log it on console and see what we can see.
  ``` tsx 
  onClick={(e) => console.log(e)}
  ```
  ![](assets/Pasted%20image%2020240820212659.png)
- Type of this object is `SyntheticBaseEvent` which wrapped around around browser event object. This is built in class in React. Reason for having this is cross browser compatibility.
  ![](assets/SmartSelect_20240820_213351_Samsung%20Notes.jpg)
- Here event handling logic is very simple. If the logic is more complex we don't write the logic middle of the JSX markup. We move the logic in to separate function.
  ![](assets/SmartSelect_20240820_220352_Samsung%20Notes.jpg)
- We need to specify the type of the parameter `event`. If we hover the mouse over the `event` parameter in JSX we can see the type. 
  ![](assets/Pasted%20image%2020240820221311.png)
- When we pass `event` in inline JSX function TS compiler knows type of the parameter. That's why we don't get any warning earlier
- But when we declare separate function TS compiler doesn't know type of parameter.
- Once we put the type annotation we will get properties of event object from IntelliSense.
  ![](assets/Pasted%20image%2020240820224121.png)
  ``` tsx 
  //must be import
  import { MouseEvent } from "react";

  function ListGroup() {
    //Event handler
    //the job is handling the event in this case click events
    const handleClick=(event:MouseEvent)=>console.log(event)

    return (
      <>
        ...
          <li
            key={item}
            className="list-group-item"
            // don't put () when calling event handler
            onClick={handleClick}
          >
            {item}
          </li>
        ...
      </>
    );
  }

  ```