import { useState } from "react";

function RadioDropdown() {
  const [radio, setRadio] = useState("");
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender:</h4>

      <input
        type="radio"
        name="gender"
        id="male"
        onChange={(evt) => setRadio(evt.target.value)}
      />
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" name="gender" />
      <label htmlFor="female">Female</label>

      <h4>Radio Value: {radio}</h4>
    </div>
  );
}

export default RadioDropdown;
