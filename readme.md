# Conditional Rendering
- To conditionally render content, we can use an `if statement` or a `ternary` operator or `&&` operator.
#### 3. &&
- Mostly common use way for Conditional rendering
- If our condition is true result will be paragraph element. But if the condition is false, result of entire expression is false and nothing would be render on the screen. 
  ``` tsx 
  {/* "logic" && "value that return when condition is true" */}
  {items.length ===0 && <p>No item found</p>}
  ```
- explain how it works using console on chrome development tools.
  ![](assets/Pasted%20image%2020240725135650.png)
---