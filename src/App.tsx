import { useState } from "react";

const App = () => {
  const [drink, setDrink] = useState({ title: "Coke", price: 5 });
  const handleClick = () => {
    drink.price = 6;
    // This won't work because React doesn’t detect the change.
    setDrink(drink);
  };
  return (
    <div>
      {/* to display price update */}
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
