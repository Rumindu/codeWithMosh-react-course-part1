# Rendering List using `map` function
- To render a list in JSX, we use the `array.map()` method. Because JSX doesn't have `for-loops`
  ``` tsx 
  function ListGroup() {
    //declare const and store String array
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    return (
        <>
        <h1>List</h1>
        <ul className="list-group">
            {/* must put map() function within curly brackets */}
            {items.map((item) => (
            // {item} should be within {} to render data dynamically 
            <li className="list-group-item">{item}</li>
            ))}
        </ul>
        </>
    );
  }
  export default ListGroup;
  ```
- In above implementation we get an warning message on console.
	![](assets/Pasted%20image%2020240724150028.png)
- When mapping items to list, React needs unique key for each item, which can be a string or a number. otherwise it will show an error on console.
- Mapping items to list with a unique key
  ``` tsx 
  //ListGroup.tsx
  function ListGroup() {
  ...
    {items.map((item) => (
    // Here we can use item as unique key,
    //Because each item is unique String
    <li key={item} className="list-group-item">
      {item}
    </li>
    ))}
  ...
  }
  ```