import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  function setDarkMode(params) {
    document.querySelector("body").setAttribute("data_theme", "dark");
  }
  function setLightMode(params) {
    document.querySelector("body").setAttribute("data_theme", "light");
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
      console.log("dark");
    } else {
      setLightMode();
      console.log("light");
    }
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
