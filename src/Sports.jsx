import { useState } from "react";

export default function Sports() {
  const [score, setScore] = useState(0);

  const handleClick1 = (num) => {
    const newScore = score + num;
    setScore(newScore);
  };

  const handleClick2 = (num) => {
    const newScore = score + num;
    setScore(newScore);
  };

  const handleClick3 = (num) => {
    const newScore = score + num;
    setScore(newScore);
  };
  return (
    <div>
      <h1>Player : Bangladesh</h1>
      <h2>Score : {score}</h2>
      {score >= 30 && (
        <h3 className="text-green-500">Bangladesh win the match</h3>
      )}
      <button className="btn" onClick={() => handleClick1(1)}>
        1
      </button>
      <button className="btn" onClick={() => handleClick2(2)}>
        2
      </button>
      <button className="btn" onClick={() => handleClick3(3)}>
        3
      </button>
    </div>
  );
}
