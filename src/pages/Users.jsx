import { Link } from "react-router";

function Users() {
  const userData = [
    {
      id: 1,
      name: "Moeez",
    },
    {
      id: 2,
      name: "Hasan",
    },
    {
      id: 3,
      name: "Huzaifa",
    },
    {
      id: 4,
      name: "Asad",
    },

    {
      id: 5,
      name: "Ali",
    },
  ];
  return (
    <div>
      <h1>Users List Page</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <Link to={`/users/user/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Users;
