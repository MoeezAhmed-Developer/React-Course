import UserLoop from "./UserLoop";

function ReuseLoop() {
  const users = [
    {
      name: "Moeez",
      email: "moeez@test.com",
      age: 20,
    },
    {
      name: "Hasan",
      email: "hasan@test.com",
      age: 18,
    },
    {
      name: "Huzaifa",
      email: "huzaifa@test.com",
      age: 15,
    },
    {
      name: "Ali",
      email: "ali@test.com",
      age: 24,
    },
    {
      name: "Zain",
      email: "zain@test.com",
      age: 17,
    },
  ];
  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {users.map((user, idx) => (
        <UserLoop data={user} key={idx} />
      ))}
    </div>
  );
}

export default ReuseLoop;
