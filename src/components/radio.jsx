import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("female");
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender:</h4>

      <input
        type="radio"
        name="gender"
        id="male"
        value={"male"}
        checked={gender == "male"}
        onChange={(evt) => setGender(evt.target.value)}
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        id="female"
        name="gender"
        value={"female"}
        checked={gender == "female"}
        onChange={(evt) => setGender(evt.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h4>Selected Gender: {gender}</h4>
    </div>
  );
}

export default Radio;
