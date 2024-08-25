# Passing Children
- Sometimes we want to pass children to a component. like `<div> Hello </div>`. We need to create our component like this `<div>` element,
- Here contain an `Alert` component and pass the Alert message as a component's attribute in the App component. [like](https://github.com/Rumindu/codeWithMosh-react-course-part1/tree/e3325a183064499cb505d283123beda72bd05565)
  ``` tsx 
  <Alert message="Danger!!!!" />
  ```
  [Source code](https://github.com/Rumindu/codeWithMosh-react-course-part1/tree/4bec2138e69f4fe9dd498bc6aa790a96f92e3281)
- This is way of passing `message` to `Alert` component is kind of ugly. Wouldn't that be nicer if we could pass text as child to this component like `<Alert>Danger!!!</Alert>`
- To do this we need to add a special prop called `children` that support all component to the Props Interface.
  ``` tsx
  //Alert.tsx 
  interface Props{
    //`message: String` is replaced by `children: String`
    children: String
  }
  const Alert = ({children}:Props) => {
    return (
      <div className="alert alert-primary">{children}</div>
    )
  }
  ```

  ``` tsx 
  //App.tsx
  function App() {
    return (
      <div>
        <Alert>Hello world</Alert>
      </div>
    );
  }
  ```
  [Source code](https://github.com/Rumindu/codeWithMosh-react-course-part1/tree/9e0b12cbc7d6b516f5d7a4d00fe3ef75eff4636b/src)
- we can also pass html content like `<Alert><span>Danger!!!</span></Alert>`instead of a simple string.
- If we are going to implement this one in above code we get an error
  ![](assets/Pasted%20image%2020240825143617.png)
- Because in Interface Props we define type of children as `string`. But here we aren't passing a string we are passing more complex structure. To solve that we need to change type children to `ReactNode`.
  ``` tsx 
  interface Props {
    //change type of children from string to ReactNode
    children: ReactNode;
  }
  ```