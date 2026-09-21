import { useState } from "react";

function Student() {
  const [student, setStudent] = useState("Ali");
  return (
    <div>
      <h1>Student Name: {student}</h1>
      <button onClick={() => setStudent("Raza")}>
        Update Student Name
      </button>{" "}
    </div>
  );
}

export default Student;
