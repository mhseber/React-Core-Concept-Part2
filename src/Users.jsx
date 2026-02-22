import { use } from "react";
import MyUsers from "./MyUsers";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div className="card">
      <h3>Users : {users.length}</h3>
      {users.map((user) => (
        <MyUsers users={user}></MyUsers>
      ))}
    </div>
  );
}
