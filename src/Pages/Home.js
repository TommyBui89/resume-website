import React from 'react';

import ProfilePicture from "../Resources/ProfilePicture.jpg"

function Home() {
  return (
    <div style={styles.container}>
      <img className="image-glow-effect" src={ProfilePicture} alt="Tommy Bui" style={styles.profilePicture} />
      <h1 className="text-glow-effect" style={styles.greeting}>Hello</h1>
      <p className="text-glow-effect" style={styles.introText}>
        I'm Tommy Bui, a 21-year-old passionate individual with diverse interests and aspirations. Welcome to my personal website where you'll find insights into my education, skills, experiences, and projects. I'm excited to share my journey with you. Dive in to learn more and don't hesitate to reach out if you have any questions!
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '69vh',
    color: '#fff',
    padding: '0 20px',
  },
  profilePicture: {
    width: '150px',
    height: '150px',  // <-- Set height to auto
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover',  // <-- Ensure image covers the space without distortion
},
  greeting: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '1.2rem',
    textAlign: 'center',
  },
};

export default Home;
