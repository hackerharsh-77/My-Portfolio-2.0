import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";

function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://github.com/hackerharsh-77'>
                            <i className='fa fa-github'></i> {/*github*/}
                        </a>
                        <a href='https://www.linkedin.com/in/harsh-r-594195200/'>
                            <i className='fa fa-linkedin'></i> {/*linkedin*/}
                        </a>
                        <a href='https://www.instagram.com/h.a.r.s.h.0101/'>
                            <i className='fa fa-instagram'></i> {/*hackerrank*/}
                        </a>
                        {/* <a href='#'>
                            <i className='fa fa-facebook-square'></i> 
                        </a> */}
                    </div>
                   
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Harsh</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev", 1500,
                                    "Full Stack Developer", 1500,
                                    "MERN Stack Developer", 1500,
                                ]} />
                        </h1>
                        <span className='profile-role-tagline'>
                            A mint of creativity with knack of building websites.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        Hire me
                    </button>
                    <a href="Harsh's Resume (1).pdf" download="Harsh Resume.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
            </div>
        </div>
    </div>
  );
}

export default Profile