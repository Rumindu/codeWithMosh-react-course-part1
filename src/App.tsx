import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "John Doe",
    address: { city: "New York", zipCode: "10001" },
  });
  const handleClick = () => {
    setCustomer({
      ...customer, // Spread the existing customer object
      address: {
        // Create a new address object
        ...customer.address, // Spread the existing address object
        zipCode: "94112", // Update the zipCode
      },
    });
  };
  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
