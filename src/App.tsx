import { useState } from "react";

const App = () => {
  const [tags, setTags] = useState(["happy", "sad", "excited"]);
  const handleClick = () => {};
  return (
    <div>
      {tags.join(", ")}
      <button style={{ marginLeft: "5px" }} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default App;
