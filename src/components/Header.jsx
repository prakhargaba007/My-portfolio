import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Button from "./Button";
import DarkMode from "./DarkMode/DarkMode/DarkMode";

function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <NavLink to="/">
            <h1>PORTOFOLIO WEBSITE</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login-button">
        {/* <button className="theme">
          <img src={lightTheme} alt="" />
        </button> */}
        <DarkMode />
        <Link to='/signup?mode=signup'>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
