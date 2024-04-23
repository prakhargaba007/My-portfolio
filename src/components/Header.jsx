import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Button from "./Button";
import DarkMode from "./DarkMode/DarkMode/DarkMode";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="container">
        <div>
          <NavLink to="/">
            <h1>
              <span>PORTOFOLIO WEBSITE</span>
            </h1>
          </NavLink>
        </div>
        <nav>
          <ul
            aria-disabled
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
          >
            <li>
              <Link
                to="#home"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Project
              </Link>
            </li>
            <li>
              <a href="https://github.com/prakhargaba007" className={({ isActive }) => (isActive ? "active" : undefined)}>GitHub</a>
            </li>
          </ul>
          <div className="burger-menu" onClick={handleToggleMenu}>
            <span>&#9776;</span>
          </div>
        </nav>
      </div>
      <div className="login-button">
        <DarkMode />
        <Link to="/signup?mode=signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
