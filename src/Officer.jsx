const Officer = ({ details }) => {
  const { name, post, office, group } = details;
  return (
    <div className="student">
      <h1>Name : {name} </h1>
      <h2>Post : {post} </h2>
      <h3>Group : {group} </h3>
      <p> Office : {office} </p>
    </div>
  );
};

export default Officer;
