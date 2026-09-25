import { useState } from "react";

function UpdatingObject() {
  const [data, setData] = useState({
    name: "Moeez",
    address: {
      city: "Karachi",
      country: "Pakistan",
    },
  });

  const handleData = (value) => {
    data.name = value;
    setData({ ...data });
  };

  const handleCity = (value) => {
    data.address.city = value;
    setData({ ...data, ...data.address.city });
  };

  const handleCountry = (value) => {
    data.address.country = value;
    setData({ ...data, ...data.address.country });
  };

  return (
    <div>
      <h1>Updating Object In react</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(evt) => handleData(evt.target.value)}
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

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
}

export default UpdatingObject;
