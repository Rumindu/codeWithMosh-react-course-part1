# Creating a react component
- React components can be created using a function or a class. Function-based components are the preferred approach as they’re more concise and easier to work with.
- ==JSX stands for JavaScript XML==. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.
- Use **pascal casing** for naming components.
``` tsx 
//Message.tsx

//PascalCasing
function Message(){
  //JSX
  return <h1>Hello world</h1>
}

export default Message
```

``` tsx 
//App.tsx
import Messages from "./Message";

function App() {
  return <div> <Messages/> </div>;
}

export default App;
```