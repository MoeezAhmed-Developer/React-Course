import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (evt) => {
    if (evt.target.checked) {
      setSkills([...skills, evt.target.value]);
    } else {
      setSkills([...skills.filter((item) => item !== evt.target.value)]);
    }
  };

  return (
    <div>
      <h1>Handle Checkbox in React JS</h1>
      <h2>Select Your Skills</h2>
      {/*  */}
      <input type="checkbox" value={"html"} id="html" onChange={handleSkills} />
      <label htmlFor="html">HTML</label> <br /> <br />
      <input type="checkbox" value={"js"} id="js" onChange={handleSkills} />
      <label htmlFor="js">Javascript</label> <br /> <br />
      <input
        type="checkbox"
        value={"python"}
        id="python"
        onChange={handleSkills}
      />
      <label htmlFor="python">Python</label> <br /> <br />
      <input type="checkbox" value={"php"} id="php" onChange={handleSkills} />
      <label htmlFor="php">PHP</label> <br /> <br />
      <input
        type="checkbox"
        value={"golang"}
        id="golang"
        onChange={handleSkills}
      />
      <label htmlFor="golang">Golang</label>
      <h4>{skills.join(" ")}</h4>
    </div>
  );
}

export default Skills;
