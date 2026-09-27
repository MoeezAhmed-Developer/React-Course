import { useState } from "react";
import "../css/validation.css";

export default function SimpleValidation() {
  const [nameErr, setNameErr] = useState();
  const [passErr, setPassErr] = useState();

  const nameValidating = (evt) => {
    if (evt.target.value.length > 5) {
      setNameErr("Your name length must be under 5 chracters.");
    } else {
      setNameErr();
    }
  };

  const passValidating = (evt) => {
    const regex = /^[A-Z0-9]+$/i;

    if (evt.target.value && !regex.test(evt.target.value)) {
      setPassErr(
        "Please enter a valid password. Only numbers and alphabets allowed.",
      );
    } else {
      setPassErr();
    }
  };

  return (
    <div>
      <h1>Simple Validation In React</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={nameValidating}
          className={nameErr ? "error" : ""}
        />
        <br />
        <span className={nameErr ? "error-color" : ""}>{nameErr}</span>
        <br />
        <input
          type="text"
          placeholder="Enter your password"
          onChange={passValidating}
          className={passErr ? "error" : ""}
        />
        <br />
        {passErr ? (
          <span className={passErr ? "error-color" : ""}>{passErr}</span>
        ) : null}
        <br />
        <button disabled={nameErr || passErr}>Login</button>
      </div>
    </div>
  );
}
