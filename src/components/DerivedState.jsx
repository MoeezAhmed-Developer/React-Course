import { useState } from "react";

function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUsers = () => {
    setUsers([...users, user]);
  };

  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  return (
    <div>
      <h1>Derived State</h1>

      <h3>Total User: {total}</h3>
      <h3>Last User: {last}</h3>
      <h3>Total Unique User: {unique}</h3>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(evt) => setUser(evt.target.value)}
      />
      <button onClick={handleAddUsers}>Add user</button>
      {users.map((user, idx) => (
        <h4 key={idx}>{user}</h4>
      ))}
    </div>
  );
}

export default DerivedState;
