import { useState } from "react";

const App = () => {
  const [drink, setDrink] = useState({ title: "Coke", price: 5 });
  const handleClick = () => {
    const newDrink = { ...drink, price: 6 };

    setDrink(newDrink);
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
