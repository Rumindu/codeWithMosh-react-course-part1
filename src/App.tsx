import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [clicked, setClicked] = useState(0);
  const markClicked = () => {
    setClicked(1);
  };
  const clearClicked = () => {
    setClicked(0);
  };
  return (
    <div>
      <Alert onClicked={clearClicked} clicked={clicked}>My alert</Alert>
      <Button onClick={markClicked} btnColor="danger">
        My Button
      </Button>
    </div>
  );
}

export default App;
