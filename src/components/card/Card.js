import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Card({
  name,
  description,
  github,
  live,
  imgsrc,
  tags,
}) {
  console.log("inne");
  let data = [];
  for (let i = 0; i < tags.length; i++) {
    data.push(tags[i].tag + " ");
  }
  console.log(data);
  return (
    <div className="container-card">
      <div className="card-left">
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div>
          <div className="container-tags">{data}</div>
          <div className="container-buttons">
            <a href={github} className="btn-projects">
              <FontAwesomeIcon className="icon-project" icon={faGithub} />
              GitHub
            </a>
            <a href={live} className="btn-projects">
              Live Site
            </a>
          </div>
        </div>
      </div>
      <div className="card-right">
        <img className="img-project" src={imgsrc} alt="img"></img>
      </div>
    </div>
  );
}
