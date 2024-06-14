import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 10px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`;

const Subtitle = styled.h4`
  font-size: 16px;
  color: #b3b3b3;
  margin: 5px 0;
`;

const Date = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #cccccc;
  margin: 10px 0 0;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Title>{experience.title}</Title>
      <Subtitle>{experience.subtitle}</Subtitle>
      <Date>{experience.date}</Date>
      <Description>{experience.description}</Description>
    </Card>
  );
};

export default ExperienceCard;
