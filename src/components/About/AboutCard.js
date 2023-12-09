import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Xavier Emma </span>
            current student at the <span className="purple">University of Central Florida .</span>
            <br />
            I am currently double majoring in Computer Science and Mathematics.
            <br />
            I strive to find a career in Software Development where I can trult make an impact.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Advance Artificial Intelligence              
            </li>
            <li className="about-activity">
              <ImPointRight /> Scuba Dive
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel               
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation distinguishes between a leader and a follower."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
