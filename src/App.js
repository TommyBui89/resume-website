import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter component

import MenuBar from './Components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesConfig from './Route';
import MainBackground from './Resources/MainBackground.jpeg';

import ParticlesBackground from './Components/ParticlesBackground';

function App() {
    return (
      <div style={{
        display: 'flex',
        width: '100vw',
        height: '100vh', // Updated this line to use 'vh' instead of '%'
        backgroundImage: `url(${MainBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        overflow: 'hidden', // Added to prevent scroll
      }}>
        <ParticlesBackground />
          <div style={{
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '20px',
            margin: '40px',
            height: 'calc(100vh - 80px)', // Adjusted to account for margins
          }}>
              <Router>
                  <MenuBar />
                  <RoutesConfig />
              </Router>
          </div>
      </div>
    );
  }
  

export default App;
