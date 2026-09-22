import { useState } from "react";
import ClockTime from "./ClockTime";

function ChangeColor() {
  const [color, setColor] = useState("white");
  return (
    <div style={{ marginBottom: "20px" }}>
      <select onChange={(evt) => setColor(evt.target.value)}>
        <option value="white">white</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <ClockTime color={color} />
    </div>
  );
}

export default ChangeColor;
