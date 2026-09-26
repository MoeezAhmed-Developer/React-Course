import { Link, NavLink } from "react-router";
import "../css/header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="site-logo">
        <Link to="/">React Page</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/pk/others">Others</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
