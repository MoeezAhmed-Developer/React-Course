import CustomerForm from "./CustomerForm";

function UseFormHooks() {
  async function handleSubmit() {
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
