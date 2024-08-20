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