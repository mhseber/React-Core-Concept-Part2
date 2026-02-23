export default function student({ info }) {
  const { name, id, gpa } = info;
  return (
    <div className="student">
      <h1>Name : {name} </h1>
      <p> ID : {id}</p>
      <p> GPA : {gpa}</p>
    </div>
  );
}
