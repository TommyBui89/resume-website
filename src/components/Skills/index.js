import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
  span {
    background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
  overflow: hidden;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
  object-fit: contain;
`;

const SkillName = styled.div`
  color: white; /* Make text white */
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>
          Skills <span>&</span> Technologies
        </Title>
        <Desc>Using the latest tech this world has to offer</Desc>
        <SkillsContainer>
          {skills.map((category, index) => (
            <Marquee
              key={index}
              direction={index % 2 === 1 ? "right" : "left"}
              speed={20}
              gradient={false}
              pauseOnHover={true}
            >
              {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillImage src={skill.image} alt={skill.name} />
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </Marquee>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;