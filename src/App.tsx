import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")} btnColor="danger">
        Hiii
      </Button>
    </div>
  );
}

export default App;
