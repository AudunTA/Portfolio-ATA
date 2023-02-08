import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import About from "./components/about/About";
import Skill from "./components/about/Skill.mjs";
import Education from "./components/about/Education";
import H2 from "./components/H2";
import Card from "./components/card/Card";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
      tags: [{ tag: "HTML" }, { tag: "CSS" }, { tag: "JavaScript" }],
    },
    {
      id: 2,
      name: "AuctionHouse",
      description:
        "AuctionHouse is my semesterproject for the 3rd semester at Noroff. This is an Auction website that has alot of interactive functionallity using APIs.",
      github: "https://github.com/AudunTA/SemesterAssignment_Auctionhouse",
      live: "https://audunta.github.io/SemesterAssignment_Auctionhouse/",
      imgsrc: require(".//images/auctionHouse.png"),
      tags: [
        { tag: "HTML" },
        { tag: "CSS" },
        { tag: "JavaScript" },
        { tag: "BootStrap" },
      ],
    },
    {
      id: 3,
      name: "FrontFace",
      description:
        "I developed FrontFace, a social media platform, in collaboration with a classmate as a course assignment in JavaScript 2. The project was completed within a tight timeframe of one week.",
      github: "",
      live: "",
      imgsrc: require(".//images/frontface.png"),
      tags: [
        { tag: "HTML" },
        { tag: "CSS" },
        { tag: "JavaScript" },
        { tag: "BootStrap" },
      ],
    },
    {
      id: 4,
      name: "PlantSpire",
      description:
        "This was my semester 2 project at Noroff. This showcased alot of the newly learned javascript and it was graded a B.",
      github: "https://github.com/AudunTA/PlantSpire_p",
      live: "https://unrivaled-mooncake-14dedc.netlify.app/",
      imgsrc: require(".//images/plantSpire.png"),
      tags: [
        { tag: "HTML" },
        { tag: "CSS" },
        { tag: "JavaScript" },
        { tag: "BootStrap" },
      ],
    },
    {
      id: 5,
      name: "Adventure Trails Hike - Old",
      description:
        "As a project for my first semester at Noroff, I created Adventure Trails Hike, a fully functional website built with HTML and CSS.",
      github: "https://github.com/AudunTA/adventureTrailHikes",
      live: "https://splendorous-figolla-9d9850.netlify.app/",
      imgsrc: require(".//images/adventureTrails.png"),
      tags: [
        { tag: "HTML" },
        { tag: "CSS" },
        { tag: "JavaScript" },
        { tag: "BootStrap" },
      ],
    },
  ]);
  // Add state to control visibility of first component
  const [showFirst, setShowFirst] = useState(true);

  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Education />
      <H2 text="My Latest Projects" />
      {data.map((item, index) => {
        // Check if it's the first component and if showFirst is true
        if (index === 0 && showFirst) {
          return (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              github={item.github}
              live={item.live}
              imgsrc={item.imgsrc}
              tags={item.tags}
            />
          );
        } else {
          return (
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Card
                key={item.id}
                name={item.name}
                description={item.description}
                github={item.github}
                live={item.live}
                imgsrc={item.imgsrc}
                tags={item.tags}
              />
            </AnimationOnScroll>
          );
        }
      })}
      <div className="empty-margin-div"></div>
    </div>
  );
}
export default App;
