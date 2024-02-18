import Typed from "typed.js";

import prakhars_photo from "./assets/Prakhars photo.png";
import "./About.css";
function About() {
  // var typed = new Typed("#element", {
  //   strings: [" Full Stack Web Developer", "Web Designer", "Video Editor "],
  //   typeSpeed: 70,
  // });
  return (
    <div id="home" className="container1">
      <div className="c1">
        <h2>Hello! I’m</h2>
        <h1>Prakhar Gaba</h1>
        <p>MERN Developer</p>
        <span id="element"></span>
        <div class="buttons"></div>
      </div>
      <div className="c2">
        <img src={prakhars_photo} alt="prakhar's photo" />
        <div></div>
      </div>
    </div>
  );
}

export default About;
