import React, { useState, useEffect } from 'react';

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
  
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <section style={{ ...styles.section, fontSize: isMobile ? '5.56vw' : '3.47vw' }}>
        <h2 style={{fontSize: isMobile ? '5.56vw' : '2.78vw', color: 'white', marginBottom:'1.53vw'}}>Skills</h2>
  
        <div style={{ ...styles.grid, flexDirection: isMobile ? 'column' : 'row' }}>
          {skillList.map((item, index) => (
            <div key={index} style={styles.gridItem}>
              <img src={item.logo} alt={item.skill} style={{ maxWidth: isMobile ? '20vw' : '5vw', maxHeight: isMobile ? '20vw' : '5vw', marginBottom: '1.39vw',}} />
              <span style={styles.skillName}>{item.skill}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  const styles = {
    section: {
      padding: '1.39vw',
      borderRadius: '0.69vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    },
    grid: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      width: '100%',
    },
    gridItem: {
      border: '0.07vw solid white',
      width: '15vw',  // Adjusted from '17.36vw'
      height: '11vw', // Adjusted from '13.89vw'
      padding: '0.69vw',
      textAlign: 'center',
      position: 'relative',
      borderRadius: '0.35vw',
      background: 'rgba(0, 0, 0, 0.1)',
      margin: '0.69vw auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    skillName: {
      color: 'white',
      fontSize: '1.11vw',
    },
  };
  
  export default Skills;