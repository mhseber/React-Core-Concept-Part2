import { useState } from "react";

const MultiCounter = ({ title, step, limit }) => {
  const [count, setCount] = useState(0);

  const handleUpdate = () => {
    if (limit !== undefined && count >= limit) {
      alert("Limit Reached");
    }
    setCount(count + step);
  };
  return (
    <div
      style={{
        border: "2px solid white",
        margin: "10px",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h1>{count}</h1>
      <button className="btn" onClick={handleUpdate}>
        Update ({step > 0 ? `+${step}` : step})
      </button>
    </div>
  );
};

export default MultiCounter;
