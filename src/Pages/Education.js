import React, { useState } from 'react';

import DeakinLogo from '../Resources/DeakinLogo.png';
import LatrobeLogo from '../Resources/LatrobeLogo.jpeg';

function Education() {
    const [showDetailsDeakin, setShowDetailsDeakin] = useState(false);
    const [showDetailsLatrobe, setShowDetailsLatrobe] = useState(false);

    return (
        <section style={{ textAlign: 'center'}}>
            <h2 style={{ fontSize: '5rem', color:'white' }}>Education</h2>

            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop:'40px'}}>
                <div 
                    style={{ border: '1px solid white', width: '30%', padding: '20px', textAlign: 'center', position: 'relative', borderRadius:'5px', background: 'rgba(0, 0, 0, 0.1)'}}
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
                            <p >Course</p>
                            <p>Majoring in Software Development</p>
                        </div>
                    )}
                </div>

                <div 
                    style={{ border: '1px solid white', width: '30%', padding: '20px', textAlign: 'center', position: 'relative', borderRadius:'5px', background: 'rgba(0, 0, 0, 0.1)'}}
                    onMouseEnter={() => setShowDetailsDeakin(true)}
                    onMouseLeave={() => setShowDetailsDeakin(false)}
                >
                    <div style={{ cursor: 'pointer' }}>
                        <img src={DeakinLogo} alt="Deakin University Logo" style={{ width: '100px', height: '100px' }} />
                        <h3 style={{color:'white'}}>Information Technology</h3>
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
