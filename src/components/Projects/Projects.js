import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Spyderman from "../../Assets/Projects/Spyderman.png";
import Miranda from "../../Assets/Projects/Miranda.png";
import Shopping from "../../Assets/Projects/Shopping.png"

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
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Spyderman}
             isBlog={false}
              title="Spyder Man Landing Page"
              description="A simple Spyderman landing page project developed by us HTML , CSS and Js"
              ghLink="https://github.com/MadhanBabuUradi/LandingPage"
              demoLink="https://madhanbabuuradi.github.io/LandingPage/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Shopping}
             isBlog={false}
              title="Shopping-HUB"
              description="A simple Shopping HUB webpage developed by using React Native its similar to eCommerce project . "
              ghLink="https://github.com/MadhanBabuUradi/Shopping-HUB"
              demoLink="https://shopping-hub-umadhanbabu.vercel.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Miranda}
              isBlog={false}
              title="Miranda"
              description="A Simple retro theme project "
              ghLink="https://github.com/MadhanBabuUradi/Retro"
              demoLink="https://retro-website-umadhanbabu.vercel.app/"              
            />
          </Col>

         

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
