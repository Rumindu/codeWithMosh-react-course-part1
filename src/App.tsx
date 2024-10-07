import { useState } from "react";

const App = () => {
  const [tags, setTags] = useState(["happy", "sad", "excited"]);
  const handleClick = () => {
    // Final setTag() method only execute. please comment others to see relevant output

    //Add new item to the array
    setTags([...tags, "cheerful"]);

    // Remove item from the array
    setTags(tags.filter((tag) => tag !== "sad"));

    // Update item in the array
    setTags(tags.map((tag) => (tag === "excited" ? "thrilled" : tag)));
  };
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
