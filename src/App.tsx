import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
      {/* Not need to wrap "Cities "within {} due to passing just a value not a variable */}
    </div>
  );
}

export default App;
