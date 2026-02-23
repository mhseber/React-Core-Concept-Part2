import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Sports from "./Sports";
import Users from "./Users";
import Student from "./Student";
import Officer from "./Officer";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

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

  // p1

  const studentInfo = {
    id: 20021,
    name: "MH.SEBER",
    gpa: 3.0,
  };

  const officeDetails = {
    name: "woadud",
    group: "a2w",
    post: "Dhaka",
    office: "MH-Group",
  };

  return (
    <>
      <h1>Vite + React</h1>

      <div>
        <h2>Student Information</h2>
        <Student info={studentInfo} />
      </div>

      <div>
        <h1>Office Information</h1>
        <Officer details={officeDetails} />
      </div>

      {/* <Suspense fallback={<div>Loading users...</div>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense> */}

      {/* <Sports />

      <Counter /> */}

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
