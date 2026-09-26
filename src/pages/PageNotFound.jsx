import { Link } from "react-router";

function PageNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for doesn't exist or may have been
        moved.
      </p>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
}

export default PageNotFound;
