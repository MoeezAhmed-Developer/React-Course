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
        <Link
          to={`/user/${user.id}`}
          style={{ display: "block" }}
          key={user.id}
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
}
export default Users;
