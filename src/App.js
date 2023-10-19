import React, { useState, useEffect } from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesConfig from './Route';
import MainBackground from './Resources/MainBackground.jpeg';
import ParticlesBackground from './Components/ParticlesBackground';

function App() {
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

    const containerStyle = {
        // display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${MainBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        overflow: 'hidden',  // prevents potential scrolling issues
        minHeight: '100vh'
    };
    
    const innerDivStyle = {
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: isMobile ? '10px' : '20px',
        margin: isMobile ? '20px' : '40px',
        height: isMobile ? 'calc(100vh - 2 * (20px + 10px))' : 'calc(100vh - 80px)', 
        overflowY: 'auto' 
    };      

    return (
        <div style={containerStyle}>
            <ParticlesBackground />
            <div style={innerDivStyle}>
                <Router>
                    <MenuBar />
                    <RoutesConfig />
                </Router>
            </div>
        </div>
    );
}

export default App;
