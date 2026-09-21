import { useState } from "react";

function Dropdown() {
  const [dropdown, setDropdown] = useState("lahore");

  return (
    <div>
      <h1>Select City</h1>
      <select
        name="city"
        id="city"
        defaultValue={"lahore"}
        onChange={(evt) => setDropdown(evt.target.value)}
      >
        <option value="">Select your city below</option>
        <option value="karachi">Karachi</option>
        <option value="lahore">Lahore</option>
        <option value="islamabad">Islamabad</option>
        <option value="rawalpindi">Rawalpindi</option>
        <option value="peshawar">Peshawar</option>
        <option value="quetta">Quetta</option>
        <option value="multan">Multan</option>
        <option value="faisalabad">Faisalabad</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="sukkur">Sukkur</option>
      </select>

      <h4>Selected: {dropdown}</h4>
    </div>
  );
}

export default Dropdown;
