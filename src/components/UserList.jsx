import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
  };

  const saveUserData = async () => {
    if (!name) {
      return alert("Enter your name");
    }

    if (!age) {
      return alert("Enter your age");
    }

    if (!email) {
      return alert("Enter your email");
    }

    const response = await fetch("http://localhost:3000/users", {
      method: "post",
      body: JSON.stringify({ name, age, email }),
    });

    await response.json();

    alert(`New ${name} User Added `);
  };

  return (
    <div>
      <h1>UserList</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(evt) => setName(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Age"
        onChange={(evt) => setAge(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button onClick={saveUserData}>Add User</button>

      {users.map((user, idx) => (
        <ul key={idx}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      ))}
    </div>
  );
}
