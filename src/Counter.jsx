import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const counterStyle = {
    border: "2px solid yellow",
    padding: "20px",
    borderRadius: "15px",
    // কন্ডিশন: কাউন্ট ১০ এর বেশি হলে সবুজ, নাহলে লাল
    color: count > 10 ? "green" : "red",
    transition: "0.3s", // কালার চেঞ্জটা স্মুথ হওয়ার জন্য
  };

  // const handleClick = () => {
  //   const newCount = count + 10;
  //   setCount(newCount);

  // };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRe = () => {
    setCount(count - 1);
  };

  return (
    <div style={counterStyle}>
      <h2>Count : {count}</h2>
      <button onClick={handleAdd} className="btn">
        Increase
      </button>
      <button onClick={handleRe} className="btn">
        Decrease
      </button>
    </div>
  );
}
