import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Contact() {
  const resumeURL = 'https://github.com/TommyBui89/resume-website/raw/main/Tommy%27s%20Resume%202023.pdf';
  
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
    <section style={isMobile ? styles.mobileSection : styles.section}>
      <h2 
        style={{textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: isMobile ? '1.5rem' : '4rem'}}>Contact</h2>
      <div style={styles.contactInfo}>
        <p style={isMobile ? styles.mobileContactItem : styles.contactItem}>
          <i className="fa fa-envelope" style={styles.icon}></i> 
          <span style={styles.label}>Email:</span> 
          <a href="mailto:tommyvo007@gmail.com" style={styles.link}>tommyvo007@gmail.com</a>
        </p>
        <p style={isMobile ? styles.mobileContactItem : styles.contactItem}>
          <i className="fa fa-linkedin" style={styles.icon}></i> 
          <span style={styles.label}>LinkedIn:</span> 
          <a href="https://www.linkedin.com/in/tommy-bui-0b242124b/" style={styles.link}>Tommy Bui</a>
        </p>
        <p style={isMobile ? styles.mobileContactItem : styles.contactItem}>
          <i className="fa fa-github" style={styles.icon}></i> 
          <span style={styles.label}>GitHub:</span> 
          <a href="https://github.com/TommyBui89" style={styles.link}>TommyBui89</a>
        </p>
        <a href={resumeURL} download style={styles.downloadButton}>
          <i className="fa fa-download" style={styles.icon}></i> 
          Download My Resume
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    margin: 'auto',
  },
  mobileSection: {
    padding: '15px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90vw',
    margin: 'auto',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    width: '100%',
  },
  contactItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.2em',
    gap: '10px',
  },
  mobileContactItem: {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '0.9em',
    gap: '8px',
    flexDirection:'column'
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.2em',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'white',
    fontSize: '1.2em',
  },
  label: {
    fontWeight: 'bold',
  },
  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(3, 102, 214, 0.8)',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.2em',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Contact;
