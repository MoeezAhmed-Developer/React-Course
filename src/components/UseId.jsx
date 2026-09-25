import { useId } from "react";

function UseIdHook() {
  const id = useId();

  return (
    <div>
      <h1>UseId Hook in React</h1>
      <h3>Unique Id: {id}</h3>

      <form>
        <label htmlFor={id + "name"}>Enter name:</label>
        <input type="text" placeholder="Enter name" id={id + "name"} />

        <label htmlFor={id + "password"}>Enter Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          id={id + "password"}
        />
      </form>
    </div>
  );
}

export default UseIdHook;
