import { useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "1px solid yellow",
    width: "200px",
    height: "100px",
  };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 10;
    setCount(newCount);
  };
  return (
    <div style={counterStyle}>
      <h2>Count : {count}</h2>
      <button onClick={handleClick} className="btn">
        Add me
      </button>
    </div>
  );
}
