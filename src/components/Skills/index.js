import React from 'react';
import styled, { keyframes } from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
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

const Title = styled.div`
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


const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(50%);
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px; /* Add spacing between frontend, backend, and other */
  margin-top: 30px;
  overflow: hidden;
`;

const SkillGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const SkillList = styled.div`
  display: flex;
  gap: 60px; /* Increase spacing between images */
  animation: ${({ direction }) => (direction === 'left' ? scrollLeft : scrollRight)} 60s linear infinite;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillImage = styled.img`
  width: 80px; /* Increase size of the image */
  height: 80px; /* Increase size of the image */
  margin: 0 20px; /* Add margin between the left and right of the image */
`;

const Skills = () => (
  <Container id="skills">
    <Wrapper>
      <Title>
        Skills <span>&</span> Technologies
      </Title>
      <Desc>Using the latest tech this world has to offer</Desc>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillGroup key={index}>
            <SkillList direction={skill.title === 'Backend' ? 'left' : 'right'}>
              {[...Array(3)].flatMap((_, repeatIndex) => (
                skill.skills.map((item, idx) => (
                  <SkillItem key={`${repeatIndex}-${idx}`}>
                    <SkillImage src={item.image} alt={item.name} />
                  </SkillItem>
                ))
              ))}
            </SkillList>
          </SkillGroup>
        ))}
      </SkillsContainer>
    </Wrapper>
  </Container>
);

export default Skills;
