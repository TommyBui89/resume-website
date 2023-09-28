import React from 'react';

// company logos
import SpectarLogo from '../Resources/SpectarLogo.webp'
import RolldLogo from '../Resources/RolldLogo.jpeg'
import ITBoostAustraliaLogo from '../Resources/ITBoostAustraliaLogo.webp'

function Experience() {
  return (
    <div className="experience-page" style={{ 
      padding: '5px 10vw', 
      maxWidth: '50%', 
      margin: '10px auto', 
      backdropFilter: 'blur(10px)', 
      borderRadius: '5px', 
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)', 
      border: '1px solid rgba(255, 255, 255, 0.2)', 
      transition: 'transform 0.3s',
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        margin: '5px 0', 
        color:'white', 
        fontSize: '3em',
        marginBottom:'20px'
      }}>
        Experience
      </h1>

      {[{
        logo: SpectarLogo, 
        alt: 'Spectar Group logo',
        title: 'Web Developer',
        company: 'Spectar Group · Internship',
        duration: 'Aug 2023 - Present · 2 mos',
        location: 'Melbourne, Victoria, Australia · Hybrid',
        skills: 'Skills: React.js',
      }, {
        logo: RolldLogo, 
        alt: "Roll'd Australia logo",
        title: 'Cook',
        company: "Rolld Australia Pty Ltd · Part-time",
        duration: 'Feb 2022 - Present · 1 yr 8 mos',
        location: 'Melbourne, Victoria, Australia',
      }, {
        logo: ITBoostAustraliaLogo, 
        alt: 'IT BOOST Australia logo',
        title: 'Web Development Intern',
        company: 'IT BOOST Australia · Internship',
        duration: 'May 2023 - Aug 2023 · 4 mos',
        location: 'South Melbourne, Victoria, Australia · Hybrid',
        skills: 'Skills: SEO, HTML, CSS, Java, Figma',
      }].map((exp, index) => (
        <div key={index} style={{
          margin: '5px 0px', 
          padding: '10px 5px', 
          borderRadius: '5px',
          display: 'flex', 
          justifyContent:'center',
          alignItems: 'center', 
          gap: '10px',
          backgroundColor: '#fff', 
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s',
        }}>
          <div style={{width:'20%', textAlign:'center'}}>
            <img src={exp.logo} alt={exp.alt} style={{ width: '5vw', borderRadius: '5px', marginRight:'20px' }} />
          </div>
          <div style={{ Width: '80%' }}>
            <h2 style={{ fontSize: '0.9em' }}>{exp.title}</h2>
            <h3 style={{ fontSize: '0.8em' }}>{exp.company}</h3>
            <p style={{ fontSize: '0.7em' }}>{exp.duration}</p>
            <p style={{ fontSize: '0.7em' }}>{exp.location}</p>
            {/* {exp.skills && <p style={{ fontSize: '0.7em' }}>{exp.skills}</p>} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
