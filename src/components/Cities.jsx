function CitiesDisplay() {
  const cities = [
    {
      name: "Karachi",
      famousFor: "Beaches, food streets, and business hub",
      province: "Sindh",
      population: "20+ million",
      famousFood: "Biryani",
    },
    {
      name: "Lahore",
      famousFor: "Historical landmarks, culture, and food",
      province: "Punjab",
      population: "13+ million",
      famousFood: "Nihari",
    },
    {
      name: "Islamabad",
      famousFor: "Beautiful scenery, greenery, and modern infrastructure",
      province: "Federal Capital Territory",
      population: "1+ million",
      famousFood: "Pulao",
    },
    {
      name: "Peshawar",
      famousFor: "Rich history, traditional culture, and bazaars",
      province: "Khyber Pakhtunkhwa",
      population: "2+ million",
      famousFood: "Chapli Kebab",
    },
    {
      name: "Quetta",
      famousFor: "Mountains, dry fruits, and scenic landscapes",
      province: "Balochistan",
      population: "1+ million",
      famousFood: "Sajji",
    },
  ];

  return (
    <div>
      <h1>Display Cities Name</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Famous For</td>
            <td>Province</td>
            <td>Population</td>
            <td>Famous Food</td>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, idx) => {
            return (
              <tr key={idx}>
                <td>{city.name}</td>
                <td>{city.famousFor}</td>
                <td>{city.province}</td>
                <td>{city.population}</td>
                <td>{city.famousFood}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CitiesDisplay;
