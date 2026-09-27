import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditPage() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const getUserData = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();

    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  };

  useEffect(() => {
    getUserData(id);
  }, []);

  const saveUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, age, email }),
      });
      await response.json();

      if (response.ok) {
        navigate("/pk/others");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Edit User Details</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(evt) => setName(evt.target.value)}
        value={name}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Age"
        onChange={(evt) => setAge(evt.target.value)}
        value={age}
      />
      <br /> <br />
      <input
        type="email"
        placeholder="Email"
        onChange={(evt) => setEmail(evt.target.value)}
        value={email}
      />
      <br /> <br />
      <button onClick={() => saveUser(id)}>Update User</button>
    </div>
  );
}
