import React from "react";
import "./Skill.css";
export default function Skill() {
  return (
    <div className="container-content">
      <div className="container-skill">
        <h2>My skillset</h2>
        <ul>
          <li id="no-margin">HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SASS</li>
        </ul>
        <ul>
          <li id="no-margin">Bootstrap</li>
          <li>SQL</li>
          <li>React</li>
          <li>Python</li>
        </ul>
        <ul>
          <li id="no-margin">Figma</li>
        </ul>
      </div>
      <div className="container-education">
        <h2>Education</h2>
        <div className="education-item">
          <p class="gray-text">2017-2020</p>
          <p>IT og Infomasjonssystemer, Bachelor USN Ringeriket</p>
        </div>
        <div className="education-item">
          <p class="gray-text">2021-2023</p>
          <p>Front-end Development, 2 years Noroff Kristiansand</p>
        </div>
      </div>
    </div>
  );
}
