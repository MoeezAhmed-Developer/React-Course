import { useState } from "react";

function UpdatingArray() {
  const [data, setData] = useState(["Moeez", "Karachi", "Pakistan"]);

  const handleName = (value) => {
    data[0] = value;
    setData([...data]);
  };

  const handleCity = (value) => {
    data[1] = value;
    setData([...data]);
  };

  const handleCountry = (value) => {
    data[2] = value;
    setData([...data]);
  };

  return (
    <div>
      <h1>Updating Array in State React</h1>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(evt) => handleName(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Enter City"
        onChange={(evt) => handleCity(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Country"
        onChange={(evt) => handleCountry(evt.target.value)}
      />

      <h2>Name: {data[0]}</h2>
      <h2>City: {data[1]}</h2>
      <h2>Country: {data[2]}</h2>
    </div>
  );
}

export default UpdatingArray;
