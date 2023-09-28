import React from 'react';

// logos
import javascriptLogo from '../Resources/javascriptLogo.png';
import reactLogo from '../Resources/reactLogo.png';
import nodejsLogo from '../Resources/nodejsLogo.png';
import htmlLogo from '../Resources/htmlLogo.png';
import cssLogo from '../Resources/cssLogo.png';
import javaLogo from '../Resources/javaLogo.png'; 
import pythonLogo from '../Resources/pythonLogo.png';
import gitLogo from '../Resources/gitLogo.png';

function Skills() {
  const skillList = [
    { skill: 'JavaScript', level: 90, logo: javascriptLogo },
    { skill: 'React.js', level: 85, logo: reactLogo },
    { skill: 'Node.js', level: 80, logo: nodejsLogo },
    { skill: 'HTML', level: 90, logo: htmlLogo },
    { skill: 'CSS', level: 95, logo: cssLogo },
    { skill: 'Java', level: 70, logo: javaLogo },
    { skill: 'Python', level: 70, logo: pythonLogo },
    { skill: 'Git', level: 90, logo: gitLogo },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.grid}>
        {skillList.map((item, index) => (
          <div key={index} style={styles.gridItem}>
            <img src={item.logo} alt={item.skill} style={styles.logo} />
            <span style={styles.skillName}>{item.skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    justifyContent: 'center',
  },
  gridItem: {
    textAlign: 'center',
    background: 'black',
    padding: '20px', // increased padding
    borderRadius: '5px',
    color: 'white',
    margin: '10px', // increased margin
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '120px', // increased width
    height: '120px', // increased height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: '70px', // increased max width
    maxHeight: '70px', // increased max height
    marginBottom: '5px',
  },
  skillName: {
    display: 'block',
    color: 'white',
  },
};

export default Skills;
