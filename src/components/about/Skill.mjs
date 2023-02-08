import React from "react";
import "./Skill.css";
export default function Skill() {
  return (
    <div className="container-content">
      <div className="container-skill">
        <h2>My skillset</h2>
        <p>HTML • CSS • JavaScript • SASS</p>
        <p>Bootstrap • SQL • React • Python</p>
        <p>Figma</p>
      </div>
      <div className="container-education">
        <h2>Education</h2>
        <div className="education-item">
          <p class="gray-text">2017-2020 </p>
          <p className="education-text">
            {" "}
            IT og Infomasjonssystemer, Bachelor USN Ringeriket
          </p>
        </div>
        <div className="education-item">
          <p class="gray-text">2021-2023 </p>
          <p className="education-text">
            Front-end Development, 2 years Noroff Kristiansand
          </p>
        </div>
      </div>
    </div>
  );
}
