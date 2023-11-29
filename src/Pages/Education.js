import React, { useState, useEffect } from 'react';

import DeakinLogo from '../Resources/DeakinLogo.png';
import LatrobeLogo from '../Resources/LatrobeLogo.jpeg';

function Education() {
    const [showDetailsDeakin, setShowDetailsDeakin] = useState(false);
    const [showDetailsLatrobe, setShowDetailsLatrobe] = useState(false);
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

    const sectionStyle = isMobile ? 
    { textAlign: 'center', fontSize: '2rem', padding: '10px 0' } : 
    { textAlign: 'center' };

    const containerStyle = isMobile ? 
    { display: 'flex', flexDirection: 'column', width: '90%', alignItems: 'center', margin: '20px auto'} : 
    { display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: '40px'};

    const boxStyle = {
        border: '1px solid white',
        width: isMobile ? '100%' : '30%',
        padding: '10px',
        textAlign: 'center',
        position: 'relative',
        borderRadius:'5px',
        background: 'rgba(0, 0, 0, 0.1)',
        marginBottom: isMobile ? '20px' : '0'
    };

    const logoStyle = {
        width: isMobile ? '80px' : '100px',
        height: isMobile ? '80px' : '100px',
        borderRadius: '50%'
    };

    return (
        <section style={sectionStyle}>
            <h2 style={{ fontSize: isMobile ? '2rem' : '4rem', color:'white' }}>Education</h2>

            <div style={containerStyle}>
                {/* Latrobe university details */}
                <div 
                    style={boxStyle}
                    onMouseEnter={() => setShowDetailsLatrobe(true)}
                    onMouseLeave={() => setShowDetailsLatrobe(false)}
                >
                    <div style={{ cursor: 'pointer' }}>
                        <img src={LatrobeLogo} alt="Latrobe University Logo" style={{ width: '100px', height: '100px', borderRadius:'50%'}} />
                        <h3 style={{color:'white'}}>Bachelor of Computer Science</h3>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p style={{color:'white'}}>Latrobe University</p>
                            <p style={{color:'white'}}>03/2021 - Present</p>
                        </div>
                    </div>
                    {showDetailsLatrobe && (
                        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-50%)', background: '#fff', border: '1px solid #000', padding: '10px' }}>
                            <p>Course</p>
                            <p>Majoring in Software Development</p>
                        </div>
                    )}
                </div>

                {/* Deakin university details */}
                <div 
                    style={boxStyle}
                    onMouseEnter={() => setShowDetailsDeakin(true)}
                    onMouseLeave={() => setShowDetailsDeakin(false)}
                >
                    <div style={{ cursor: 'pointer' }}>
                        <img src={DeakinLogo} alt="Deakin University Logo" style={{ width: '100px', height: '100px' }} />
                        <h3 style={{color:'white'}}>Information Technology & Robotics</h3>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p style={{color:'white'}}>Deakin University</p>
                            <p style={{color:'white'}}>03/2020 - 09/2020</p>
                        </div>
                    </div>
                    {showDetailsDeakin && (
                        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-50%)', background: '#fff', border: '1px solid #000', padding: '10px' }}>
                            <p>Courses</p>
                            <p>Robotics</p>
                            <p>Data Science</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Education;
