function UseFormHooks() {
  async function handleSubmit() {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
  }
  return (
    <div>
      <h1>useFormStatus Hook in React</h1>
      <form action={handleSubmit}>
        <input type="text" placeholder="neter usernme" />
        <input type="password" placeholder="Enetr password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UseFormHooks;
