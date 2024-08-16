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