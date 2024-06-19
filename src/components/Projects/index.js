import React from "react";
import { Container, Wrapper, Title, Desc, CardContainer } from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of websites. Here are some of my web development projects.
        </Desc>
        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} index={index} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
