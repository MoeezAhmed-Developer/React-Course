import { useActionState } from "react";

function UseActionState() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 3000));

    if (!name) {
      return { err: "Please fill your name" };
    }

    if (!password) {
      return { err: "Please fill your password" };
    }

    if (name && password) {
      return { message: "Form submitted", name, password };
    } else {
      return { err: "Please fill your fields", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <div>
      <h1>UseActionState in React</h1>
      <form action={action}>
        <input type="text" placeholder="Enter name" name="name" /> <br />
        <input type="password" placeholder="Enter Password" name="password" />
        <br />
        <button
          disabled={pending}
          style={{
            backgroundColor: "#001542",
            color: "#fff",
            padding: "10px",
            border: "none",
            outline: "none",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          {pending ? "Submitting..." : "Submit Data"}
        </button>
        <br />
        {data?.err && <span style={{ color: "red" }}>{data?.err}</span>}
        {data?.message && (
          <span style={{ color: "green" }}>{data?.message}</span>
        )}
        <h3>Name: {data?.name}</h3>
        <h3>Password: {data?.password}</h3>
      </form>
    </div>
  );
}

export default UseActionState;
