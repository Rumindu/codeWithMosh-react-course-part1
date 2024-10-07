import { useState } from "react";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      {bugs.map((bug) => {
        return (
          <div>
            {bug.title} {bug.fixed ? "Fixed" : "Not fixed"}
          </div>
        );
      })}
      <button style={{ marginLeft: "5px" }} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default App;
