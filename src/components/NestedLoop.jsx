function NestedLopp() {
  const collegeData = [
    {
      name: "Premier College",
      city: "Karachi",
      website: "premier.com",
      students: [
        {
          name: "Moeez",
          age: 20,
          email: "moeez@test.com",
        },
        {
          name: "Ahmed",
          age: 21,
          email: "ahmed@test.com",
        },
        {
          name: "Huzaifa",
          age: 19,
          email: "huzaifa@test.com",
        },
      ],
    },
    {
      name: "Punjab College",
      city: "Lahore",
      website: "punjabcollege.com",
      students: [
        {
          name: "Hamza",
          age: 22,
          email: "hamza@test.com",
        },
        {
          name: "Ali",
          age: 20,
          email: "ali@test.com",
        },
        {
          name: "Usman",
          age: 21,
          email: "usman@test.com",
        },
      ],
    },
    {
      name: "Roots College",
      city: "Islamabad",
      website: "rootscollege.com",
      students: [
        {
          name: "Hasan",
          age: 19,
          email: "hasan@test.com",
        },
        {
          name: "Bilal",
          age: 23,
          email: "bilal@test.com",
        },
        {
          name: "Zain",
          age: 20,
          email: "zain@test.com",
        },
      ],
    },
    {
      name: "City College",
      city: "Rawalpindi",
      website: "citycollege.com",
      students: [
        {
          name: "Saad",
          age: 21,
          email: "saad@test.com",
        },
        {
          name: "Danish",
          age: 22,
          email: "danish@test.com",
        },
        {
          name: "Ayan",
          age: 19,
          email: "ayan@test.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h2>Nested Loops in React</h2>
      {collegeData.map((college, idx) => (
        <ul
          key={idx}
          style={{
            backgroundColor: "#ccc",
            borderBottom: "2px solid #000",
            borderRadius: "10px",
            padding: "20px",
            width: "400px",
          }}
        >
          <li>{college.name}</li>
          <ul>
            <li>{college.city}</li>
            <li>{college.website}</li>
            <li>Students Name:</li>
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

export default NestedLopp;
