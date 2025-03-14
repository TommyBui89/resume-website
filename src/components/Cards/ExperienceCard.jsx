import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 20px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const Subtitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #b3b3b3;
  margin: 5px 0;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #888888;
  margin: 5px 0;
`;

const Description = styled.ul`
  margin-top: 10px;
  padding-left: 18px;
`;

const DescriptionItem = styled.li`
  font-size: 14px;
  color: #cccccc;
  margin-bottom: 6px;
  list-style-type: disc;
`;

const Skills = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background-color: rgba(106, 13, 173, 0.2);
  color: #caa0ff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 500;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Title>{experience.title}</Title>
      <Subtitle>{experience.subtitle}</Subtitle>
      <Date>{experience.date}</Date>
      <Description>
        {experience.description.map((item, index) => (
          <DescriptionItem key={index}>{item}</DescriptionItem>
        ))}
      </Description>
      {experience.skills && experience.skills.length > 0 && (
        <Skills>
          {experience.skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </Skills>
      )}
    </Card>
  );
};

export default ExperienceCard;
