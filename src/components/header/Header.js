import React from "react";
import "./Header.css";
let count = 10;
for (let i = 0; i < count.lenght; i++) {
  console.log(i);
}
export default function Header() {
  return (
    <header>
      <div className="logo">
        <p>Portfolio</p>
      </div>
      <div className="nav-items">
        <button class="btn-active">Projects</button>
        <button class="btn-notActive">About</button>
      </div>
    </header>
  );
}
