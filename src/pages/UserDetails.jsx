import { Link, useParams } from "react-router";

export default function UserDetails() {
  const params = useParams();

  return (
    <div>
      <h1>User Details Page</h1>
      <h2>User id is: {params.id}</h2>
      <h2>User name is: {params.name}</h2>
      <Link to="/users">Back</Link>
    </div>
  );
}
