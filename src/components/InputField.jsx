import { useState } from "react";

function InputField() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input
        type="text"
        placeholder="Write your name ...."
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
      />
      <p>{value}</p>
      <button onClick={() => setValue("")}>clear field</button>
    </div>
  );
}

export default InputField;
