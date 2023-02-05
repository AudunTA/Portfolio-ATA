import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import About from "./components/about/About";
import Skill from "./components/about/Skill.mjs";
import Education from "./components/about/Education";
import H2 from "./components/H2";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Adventure Trails Hike",
      description:
        "This is a redsign of Adventure Trails Hike, here i focues on writing better and clean HTML and CSS, and making components easy to globally change on all pages. slight use of JavaScript for the navigation",
      github: "https://github.com/AudunTA/ATH",
      live: "https://admirable-parfait-746c8d.netlify.app/index.html",
      imgsrc: require(".//images/AH-new.png"),
    },
    {
      id: 2,
      name: "AuctionHouse",
      description:
        "AuctionHouse is my semesterproject for the 3rd semester at Noroff. This is an Auction website that has alot of interactive functionallity using APIs.",
      github: "https://github.com/AudunTA/SemesterAssignment_Auctionhouse",
      live: "https://audunta.github.io/SemesterAssignment_Auctionhouse/",
      imgsrc: require(".//images/auctionHouse.png"),
    },
  ]);
  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Education />
      <H2 text="My Latest Projects" />
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          github={item.github}
          live={item.live}
          imgsrc={item.imgsrc}
        />
      ))}
    </div>
  );
}

export default App;
