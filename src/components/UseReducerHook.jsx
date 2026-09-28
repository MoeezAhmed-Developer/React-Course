import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  city: "",
  address: "",
  landmark: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div>
      <h1>Use Reducer Hook In React</h1>
      <form>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(evt) => dispatch({ val: evt.target.value, type: "name" })}
        />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(evt) =>
            dispatch({ val: evt.target.value, type: "password" })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Enter your city name"
          onChange={(evt) => dispatch({ val: evt.target.value, type: "city" })}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your address"
          onChange={(evt) =>
            dispatch({ val: evt.target.value, type: "address" })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Enter nearest landmark"
          onChange={(evt) =>
            dispatch({ val: evt.target.value, type: "landmark" })
          }
        />
        <br />
        <button>Submit</button>
      </form>

      <ul>
        <li>Your Details:</li>
        <ul>
          <li>Name: {state.name}</li>
          <li>Email: {state.email}</li>
          <li>Password: {state.password}</li>
          <li>City: {state.city}</li>
          <li>Address: {state.address}</li>
          <li>Landmark: {state.landmark}</li>
        </ul>
      </ul>
    </div>
  );
}
