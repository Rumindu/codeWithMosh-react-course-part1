# Passing Data via Props
- By using props, we can enhance the reusability of components. How? The `ListGroup` component is currently only displaying a list of cities. However, by using props, we can use this component to display not only a list of cities but also lists of colors, names, ... etc.
- Props also called properties are the inputs to our components.
- So we remove`item[]` which contains list of cities from `ListGroup` component and pass it as a prop to component. Like call a function and give its arguments. Same thing is going to happen heading `h1>List</h1>`also.
- First we should define inputs to this `ListGroup` component. so we should able to pass an object with has 2 properties `items:string[], heading:string`.
- To do that we use interfaces in TS
  ``` ts 
  //ListGroup.tsx
  interface Props {
    items: string[];
    heading: string
  }
  ```
- Then Add parameters to the function.
  ``` ts 
  function ListGroup(props:Props) {
    ...
  }
  ```
- Now when we go to the `App` component we have a compilation error.
  ![](assets/Pasted%20image%2020240824120411.png)
- TS compiler says `<ListGroup>` component expects 2 properties which are items, heading. But we haven't yet specified them. That's the one of benefit using TS.
- To pass `item[]` as a prop define it in `App` component.
- Now we can pass `items[]` just like attributes of html element.
  ``` tsx 
  function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    return (
      <div>
        <ListGroup items={items} heading="Cities"/>
        {/* Not need to wrap "Cities "within {} due to passing just a value not a variable */}
      </div>
    );
  }
  ```
  [Source code](https://github.com/Rumindu/codeWithMosh-react-course-part1/blob/e3325a183064499cb505d283123beda72bd05565/src/App.tsx)
- Now in the `ListGroup`component we don't have `items` any more. we need to apply `props.` as a prefix to `items`.
  ``` tsx 
  //ListGroup.tsx
  {props.items.length === 0 && <p>No item found</p>}
  ```
  [Source code](https://github.com/Rumindu/codeWithMosh-react-course-part1/blob/e3325a183064499cb505d283123beda72bd05565/src/components/ListGroup.tsx)
- Here `props.` is repeatedly applying. So better solution is destructor the parameter and no need to apply `props.` when accessing props.
  ``` tsx 
  function ListGroup({items,heading}:Props) {
    return (
      <>
        <h1>{heading}</h1>
        ...
  ```