function UnControlledComponent() {
  function handleSubmit(evt) {
    evt.preventDefault();
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if (username.value == "") {
      return alert("Please fill your username.");
    }

    if (password.value == "") {
      return alert("Please fill your password.");
    }

    console.log(username.value, password.value);
  }

  return (
    <div>
      <h1>UnControlled Component</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" id="username" />
        <input type="password" placeholder="Enter password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default UnControlledComponent;
