import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px;
  background-color: transparent;
  color: #2c3e50;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: rgb(242, 243, 244);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  color: rgb(177, 178, 179);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 0.9rem;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: white;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>My experience as a software developer includes working with various companies and honing diverse skills.</Desc>
        <TimelineSection>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                position={index % 2 === 0 ? 'left' : 'right'}
                contentStyle={{
                  background: 'transparent',
                  boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
                  border: '0.1px solid rgb(133, 76, 230)',
                  textAlign: 'left',
                }}
                contentArrowStyle={{ borderRight: '0.4rem solid rgb(133, 76, 230)' }}
                date={experience.date}
                iconStyle={{
                  background: 'white',
                  color: 'rgb(133, 76, 230)',
                }}
                icon={experience.type === 'work' ? <FontAwesomeIcon icon={faBriefcase} /> : <FontAwesomeIcon icon={faGraduationCap} />}
              >
                <ExperienceCard experience={experience} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
