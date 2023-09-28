import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Contact() {
  const resumeURL = 'https://path-to-your-online-resume.pdf'; // Replace with the actual link to your resume
  
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <div style={styles.contactInfo}>
        <p style={styles.contactItem}>
          <i className="fa fa-envelope" style={styles.icon}></i> 
          <span style={styles.label}>Email:</span> 
          <a href="mailto:tommyvo007@gmail.com" style={styles.link}>tommyvo007@gmail.com</a>
        </p>
        <p style={styles.contactItem}>
          <i className="fa fa-phone" style={styles.icon}></i> 
          <span style={styles.label}>Phone:</span> 
          <a href="tel:0435339442" style={styles.link}>0435 339 442</a>
        </p>
        <p style={styles.contactItem}>
          <i className="fa fa-linkedin" style={styles.icon}></i> 
          <span style={styles.label}>LinkedIn:</span> 
          <a href="https://www.linkedin.com/in/tommy-bui-0b242124b/" style={styles.link}>Tommy Bui</a>
        </p>
        <p style={styles.contactItem}>
          <i className="fa fa-github" style={styles.icon}></i> 
          <span style={styles.label}>GitHub:</span> 
          <a href="https://github.com/TommyBui89" style={styles.link}>TommyBui89</a>
        </p>
        {/* Added Button for Downloading Resume */}
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
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    margin: 'auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
    fontSize: '2em',
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
    backgroundColor: '#4CAF50',
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
