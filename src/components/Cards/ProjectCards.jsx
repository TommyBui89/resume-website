import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  overflow: hidden;
  padding: 20px;
  transition: all 0.5s ease-in-out;
  position: relative;
  flex-direction: ${(props) => (props.even ? "row-reverse" : "row")};
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 1;
  padding: ${(props) => (props.even ? "0 0 0 20px" : "0 20px 0 0")};
  color: #ffffff;
  max-width: 55%;

  @media (max-width: 1100px) {
    padding: 0;
    max-width: 100%;
    text-align: center;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  justify-content: center;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const Tag = styled.span`
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 1100px) {
    font-size: 1.25rem;
  }
`;

const Date = styled.p`
  font-size: 0.875rem;
  color: #bbbbbb;
  margin-top: 4px;

  @media (max-width: 1100px) {
    font-size: 0.75rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #bbbbbb;
  margin-top: 8px;

  @media (max-width: 1100px) {
    font-size: 0.875rem;
  }
`;

const StyledImage = styled.img`
  width: 28.25rem;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 2rem;
  ${(props) => (props.even ? "left: -10rem;" : "right: -10rem;")}
  display: none;

  @media (min-width: 640px) {
    display: block;
  }

  @media (max-width: 1100px) {
    position: static;
    width: 100%;
    margin-top: 20px;
  }

  transition: transform 0.3s, box-shadow 0.3s, transform 0.3s;

  .group:hover & {
    transform: scale(1.04) translate(-0.75rem, 0.75rem) rotate(-2deg);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
  }

  .group-even:hover & {
    transform: scale(1.04) translate(0.75rem, 0.75rem) rotate(2deg);
  }
`;

const ProjectCards = ({ project, setOpenModal, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isEven = index % 2 === 0;

  return (
    <Card
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
      even={isEven}
      onClick={() => setOpenModal({ state: true, project })}
    >
      <Info even={isEven}>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Info>
      <StyledImage src={project.image} alt={project.title} even={isEven} />
    </Card>
  );
};

export default ProjectCards;
