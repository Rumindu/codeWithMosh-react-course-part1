# Passing Functions via component.
- If we want to set something happen when list's item is selected like redirect to different page or get an alert. But it may be different from one application to another. Therefore we don't define this function inside the relevant component to preserve reusability. The function will be pass as a prop to the component. Component contains only just a signature of this function.
- Define **signature of function** inside the props interface.
  ``` tsx 
  //ListGroup.tsx
  interface Props {
    ...
    // define method signature only
    onSelectItem: (item:string)=>void
  }
  ```
  - Naming convention = on + `TypeOfEvent` here its `onSelectItem`
  - type of this `onSelectItem` property is a function which has a parameter type string and return void
- Now in `App` component we need to pass another prop to `ListGroup`
  ``` tsx 
  <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  ```
  - Here as a value for prop of `onSelectItem` we can pass either inline function or separate function. Here I pass separate function called `handleSelectItem`.
    ``` tsx 
    const handleSelectItem = (item: string) => console.log(item);
    ```
- In `ListGroup` we destructor the prop and add this function to relevant event handler.
  ``` tsx 
  function ListGroup({onSelectItem}:Props) {
    return (
      ...
        <li
          key={item}
          className= "list-group-item"
          onClick={() => {
            onSelectItem(item)
          }}
        >
          {item}
        </li>
      ...
    );
  }
  ```
