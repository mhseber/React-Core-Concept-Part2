import "./App.css";
import Counter from "./Counter";

function App() {
  // function handleClick() {
  //   alert("Button clicked!");
  // }

  // const handleClick2 = () => {
  //   alert("Button clicked!");
  // };

  // const handleClick3 = (num) => {
  //   const newNum = num + 42;
  //   alert(`Button clicked! ${newNum}`);
  // };

  return (
    <>
      <h1>Vite + React</h1>

      <Counter />

      {/* <button className="btn " onClick={handleClick}>
        Click me
      </button>
      <button className="btn " onClick={handleClick2}>
        Click me too
      </button>
      <button className="btn " onClick={() => handleClick3(42)}>
        Click me three
      </button> */}
    </>
  );
}

export default App;
