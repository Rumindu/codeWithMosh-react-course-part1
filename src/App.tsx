import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "John Doe",
    address: { city: "New York", zipCode: "10001" },
  });
  const handleClick = () => {};
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
