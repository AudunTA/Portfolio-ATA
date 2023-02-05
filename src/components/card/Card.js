import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Card({ name, description, github, live, imgsrc }) {
  return (
    <div className="container-card">
      <div className="card-left">
        <h2>{name}</h2>
        <p>{description}</p>

        <div className="container-buttons">
          <a href={github} className="btn-projects">
            <FontAwesomeIcon className="icon-project" icon={faGithub} />
            GitHub
          </a>
          <a href={live} className="btn-projects">
            LiveSite
          </a>
        </div>
      </div>
      <div className="card-right">
        <img className="img-project" src={imgsrc} alt="img"></img>
      </div>
    </div>
  );
}
