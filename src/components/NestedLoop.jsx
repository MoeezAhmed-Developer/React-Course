import CollegeData from "./CollegeData";

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
      <CollegeData collegeData={collegeData} />
    </div>
  );
}

export default NestedLopp;
