import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiNodejs,
  DiPython,
  DiGit,
  DiReact,
  DiJavascript,
  DiApple,
  DiAndroid,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs = {4} md = {2} className = "tech-icons">
        <DiJavascript />
      </Col>
      <Col xs = {4} md = {2} className = "tech-icons">
        <DiApple />
      </Col>
      <Col xs = {4} md = {2} className = "tech-icons">
        <DiAndroid />
      </Col>
    </Row>
  );
}

export default Techstack;
