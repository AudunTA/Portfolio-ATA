import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./About.css";
export default function About() {
  return (
    <div className="container-about">
      <div className="about-left">
        <h1>About me</h1>
        <p>
          My name is Audun, and im 25 years old. As a front-end developer
          currently studying at Noroff in Kristiansand, I have a passion for
          creating visually stunning and user-friendly websites. With a strong
          foundation in HTML, CSS, and JavaScript, I am skilled in the
          development and implementation of responsive design and enjoy working
          on projects that push the boundaries of modern web development. Im
          currently learning React. Feel free to reach out to me if you got any
          questions!
        </p>
        <a href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/">
          <FontAwesomeIcon className="icon-contact" icon={faLinkedin} />
        </a>
        <a href="https://github.com/AudunTA">
          <FontAwesomeIcon className="icon-contact" icon={faGithub} />
        </a>
      </div>
      <div className="about-right">
        <img
          className="img-selfie"
          src={require("./selfie.png")}
          alt="selfie"
        />
      </div>
    </div>
  );
}
