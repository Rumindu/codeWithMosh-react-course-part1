import { useState } from "react";


const App = () => {
  const [drink, setDrink] = useState({ title: "Coke", price: 5 });
  const handleClick = () => {};
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
