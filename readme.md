# Fragment
- In React apps, a component can only return a single element. To return multiple elements, we have 3 solutions
- ### Solution 1 - Wrap both `<h1>` and `<ul>` inside `<div>`
- VS code shortcut for doing this wrapping
  ![](assets/SmartSelect_20240814_100710_Samsung%20Notes.jpg)
  ![](assets/Pasted%20image%2020240814100824.png)
  ![](assets/SmartSelect_20240814_101050_Samsung%20Notes.jpg)
  ``` tsx 
  //ListGroup.tsx
  ...
  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div> 
  );
  ...
  ```