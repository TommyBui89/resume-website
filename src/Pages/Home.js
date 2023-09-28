import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.greeting}>Hello, I'm Tommy Bui</h1>
      <p style={styles.introText}>
        Welcome to my personal website. Here, you can find information about my education, skills, experiences, projects, and how to contact me. Feel free to explore!
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
    height: '75vh',
    color: '#fff',
    padding: '0 20px',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
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
