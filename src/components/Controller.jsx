import { useState } from "react";

function Controller() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Controller Component</h1>
      <form>
        <input type="text" placeholder="Enter name" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Controller;
