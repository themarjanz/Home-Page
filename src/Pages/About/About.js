import React from 'react';
import a1 from '../../../src/images/a1.jpg';
import a2 from '../../../src/images/a2.jpg';
import a3 from '../../../src/images/a3.jpg';

const About = () => {
    return (
        <div className='text-center'>
            <h2 className='text-success mt-2'>Team - Akhlatur Rahman Marjan</h2>
            <br />
            <p>We started with one mission: Make Learning fun. Since the class start for Tropti Mem Principle of Software Enginering.</p>

            <div className='container mt-5 d-flex justify-content-center'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={a2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">MARJAN</h5>
                        <p className="card-text">JUNIOR MERNS STACK DEVELOPER</p>

                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={a1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">FAHIM</h5>
                        <p className="card-text">WEB DEVELOPER</p>

                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={a3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">RAHIM</h5>
                        <p className="card-text">UI/UX DESIGNER</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;