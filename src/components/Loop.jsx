function Loop() {
  const userData = [
    { name: "Moeez", email: "moeez@test.com", age: 20, id: 1 },
    { name: "Ahmed", email: "ahmed@test.com", age: 22, id: 2 },
    { name: "Hamza", email: "hamza@test.com", age: 21, id: 3 },
    { name: "Ali", email: "ali@test.com", age: 24, id: 4 },
    { name: "Usman", email: "usman@test.com", age: 23, id: 5 },
    { name: "Hassan", email: "hassan@test.com", age: 25, id: 6 },
    { name: "Bilal", email: "bilal@test.com", age: 22, id: 7 },
    { name: "Saad", email: "saad@test.com", age: 26, id: 8 },
    { name: "Zain", email: "zain@test.com", age: 21, id: 9 },
    { name: "Danish", email: "danish@test.com", age: 24, id: 10 },
  ];

  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        {userData.map((user, idx) => {
          return <h4 key={idx}>{user.name}</h4>;
        })}
      </div>
    </div>
  );
}

export default Loop;
