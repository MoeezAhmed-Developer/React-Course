import CustomerForm from "./CustomerForm";

function UseFormHooks() {
  async function handleSubmit() {
    // const username = document.querySelector("#username");
    // const password = document.querySelector("#password");

    // if (username.value == "") {
    //   return alert("Please fill your username.");
    // }

    // if (password.value == "") {
    //   return alert("Please fill your password.");
    // }

    await new Promise((res) => setTimeout(res, 2000));
  }

  return (
    <div>
      <h1>useFormStatus Hook in React</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
}

export default UseFormHooks;
