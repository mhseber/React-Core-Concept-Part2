export default function MyUsers({ users }) {
  const { name, username, email } = users;
  return (
    <div className="card2">
      <h4>Name : {name}</h4>
      <p>Username : {username}</p>
      <p>Email : {email}</p>
    </div>
  );
}
