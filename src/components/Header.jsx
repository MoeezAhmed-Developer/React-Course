import { Link } from "react-router";
import "../css/header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="site-logo">
        <Link to={"/"}>React Page</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/service"}>Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={"/pk/others"}>Others</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
