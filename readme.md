# Conditional Rendering
- To conditionally render content, we can use an `if statement` or a `ternary` operator or `&&` operator.
#### 2. Ternary operation ( `? :`)
- Inside JSX we can't use `if statements`. 
- Using `ternary` operations we can do conditional rendering inside JSX.
- Inside the JSX we can only use html element or other react component. Only exception is `{ }` curly braces. Here we can render anything dynamically. 
	``` tsx 
  //ListGroup.tsx
  function ListGroup() {
    ...
    return (
      <>
        <h1>List</h1>
        {/* if this condition is true return <p>No item found</p> */}
        {/* else return null, null means nothing would be render. */}
        {items.length === 0 ? <p>No item found</p> : null}
        <ul className="list-group">
          ...
        </ul>
      </>
    );
  }
    ...

  ```
  [Source code](https://github.com/Rumindu/codeWithMosh-react-course-part1/tree/fb3fc7951f8a2312701935d3bd5072cefd3b141d)

- Sometimes this logic be more complicated and unreadable JSX . For those cases we extract this logic and store in a variable or constant. And include variable/constant name within `{ }` in JSX.
  ``` tsx 
  //ListGroup.tsx
  function ListGroup() {
    ...
    //store condition in variable
    const message = items.length === 0 ? <p>No item found</p> : null

    return (
      <>
        <h1>List</h1>
        {/*render the constant*/}
        {message}
        ...
      </>
    );
  }

  export default ListGroup;

  ```