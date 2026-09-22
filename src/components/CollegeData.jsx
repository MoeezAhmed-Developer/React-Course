function CollegeData({ collegeData }) {
  return (
    <div>
      {collegeData.map((college, idx) => (
        <ul
          key={idx}
          style={{
            backgroundColor: "#ccc",
            borderBottom: "2px solid #000",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
          }}
        >
          <li>College Name: {college.name}</li>
          <ul>
            <li>College City: {college.city}</li>
            <li>College Website: {college.website}</li>
            <li>Students Name: </li>
            {college.students.map((student, idx) => (
              <ul
                key={idx}
                style={{
                  marginBottom: "10px",
                  borderBottom: "2px solid #000",
                  borderRadius: "10px",
                }}
              >
                <li>{student.name}</li>
                <li>{student.email}</li>
                <li>{student.age}</li>
              </ul>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
}

export default CollegeData;
