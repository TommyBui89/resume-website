import React, { useState, useEffect } from 'react';

// Import logos
import SpectarLogo from '../Resources/SpectarLogo.webp';
import RolldLogo from '../Resources/RolldLogo.jpeg';
import ITBoostAustraliaLogo from '../Resources/ITBoostAustraliaLogo.webp';

function Experience() {
  // State to control which popup is currently visible, if any
  const [activePopupIndex, setActivePopupIndex] = useState(null);

  // Experience data
  const experiences = [
    {
      logo: SpectarLogo,
      alt: 'Spectar Group logo',
      title: 'Web App Developer Intern',
      company: 'Spectar Group · Internship',
      duration: 'Aug 2023 - Present · 2 mos',
      location: 'Melbourne, Victoria, Australia · Hybrid',
      skills: 'Skills: React.js, Node.js, Figma, Github',
    },
    {
      logo: RolldLogo,
      alt: "Roll'd Australia logo",
      title: 'Cook - BOH',
      company: "Rolld Australia Pty Ltd · Part-time",
      duration: 'Feb 2022 - Present · 1 yr 8 mos',
      location: 'Melbourne, Victoria, Australia',
      skills: 'Skills: Team work'
    },
    {
      logo: ITBoostAustraliaLogo,
      alt: 'IT BOOST Australia logo',
      title: 'Web Development Intern',
      company: 'IT BOOST Australia · Internship',
      duration: 'May 2023 - Aug 2023 · 4 mos',
      location: 'South Melbourne, Victoria, Australia · Hybrid',
      skills: 'Skills: SEO, HTML, CSS, Java, Figma, Github',
    },
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
    <div className="experience-page" style={{ textAlign: 'center', fontSize: '2rem', padding: '10px 0' }}>
      <h1 style={{fontSize: isMobile ? '2rem' : '4rem', color: 'white', marginBottom:'40px'}}>Experience</h1>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            style={{
              border: '1px solid white',
              width: isMobile ? '80%' : '30%',
              padding: '10px',
              textAlign: 'center',
              position: 'relative',
              borderRadius:'5px',
              background: 'rgba(0, 0, 0, 0.1)',
              margin: isMobile ? '20px auto' : '0 auto',
            }}
            onMouseEnter={() => setActivePopupIndex(index)}
            onMouseLeave={() => setActivePopupIndex(null)}
          >
            <img src={exp.logo} alt={exp.alt} style={{ width: isMobile ? '80px' : '100px', height: isMobile ? '80px' : '100px', borderRadius: '50%', marginBottom: '10px' }} />
            <h2 style={{ fontSize: '0.9em', color:'white' }}>{exp.title}</h2>
            <h3 style={{ fontSize: '0.7em', color:'white' }}>{exp.company}</h3>
            <p style={{ fontSize: '0.6em', color:'white' }}>{exp.duration}</p>
            <p style={{ fontSize: '0.5em', color:'white' }}>{exp.location}</p>
            
            {/* Hover Popup for Skills */}
            {activePopupIndex === index && exp.skills && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    fontSize: '0.6em'
                }}>
                    {exp.skills}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
