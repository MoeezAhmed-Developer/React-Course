import { Link, useParams } from "react-router";

export default function UserDetails() {
  const params = useParams();

  return (
    <div>
      <h1>User {params.id}</h1>
      <Link to="/users">Back</Link>
    </div>
  );
}
