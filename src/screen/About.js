import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="App">
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
    <p>About</p>
  </div>
);

export default About;
