import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MIPS Processor"
              description="MySPIM will demonstrate some functions of MIPS processor as well as the principle of the datapath and the control signals of MIPS processor."
              ghLink="https://github.com/xavieremma/MIPS-Processor"
              demoLink="https://github.com/xavieremma/MIPS-Processor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="D3 Library Node Graph"
              description="Using the D3 Library to construct a a visible interactive chart to highlight the societal factors affecting minorities based on an excel spreadsheet of over 500 studies, articles, and surveys"
              ghLink="https://github.com/xavieremma/D3LibraryNodeGraph"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Computer Science I Assignments"
              description="A varitey of programming assignments showcasing my skills in Data Structures and Algorithms"
              ghLink="https://github.com/xavieremma/CS1"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MIPS Processor"
              description="MySPIM will demonstrate some functions of MIPS processor as well as the principle of the datapath and the control signals of MIPS processor."
              ghLink="https://github.com/xavieremma/MIPS-Processor"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Computer Science II Assignments"
              description="Variety of programming assignments demonstrating my understanding and skills of advanced Computer Science topics"
              ghLink="https://github.com/xavieremma/CS2"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Coming Soon"
              description="Coming Soon!"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
