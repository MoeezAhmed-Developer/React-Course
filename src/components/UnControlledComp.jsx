import { useRef } from "react";

function UnControlledComponent() {
  function handleSubmit(evt) {
    evt.preventDefault();
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if (username.value == "") {
      return alert("Please enter your username.");
    }

    if (password.value == "") {
      return alert("Please enter your password.");
    }

    console.log(username.value, password.value);
    alert(`Username: ${username.value} Password: ${password.value}`);
  }

  const userRef = useRef();
  const passwordRef = useRef();

  function handleSubmitRef(evt) {
    evt.preventDefault();

    const user = userRef.current.value;
    const password = passwordRef.current.value;

    if (user == "") {
      return alert("Please enter your username.");
    }

    if (password == "") {
      return alert("Please enter your password.");
    }

    console.log(user, password);
    alert(`Username: ${user} Password: ${password}`);
  }

  return (
    <div>
      <h1>Uncontrolled Components in React</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your email" id="username" />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
        />
        <button>Submit Form</button>
      </form>

      <hr />

      <h2>Uncontrolled Component Using useRef</h2>

      <form action="" onSubmit={handleSubmitRef}>
        <input type="text" placeholder="Enter your email" ref={userRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button>Submit Form</button>
      </form>
    </div>
  );
}

export default UnControlledComponent;
