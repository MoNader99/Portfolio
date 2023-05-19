// import React, { useState, useEffect } from 'react';
import '../AboutSection/About.css'

const AboutSection = () => {
  return (
    <div className='about-section '>
        <div className='container d-flex justify-content-center align-items-center'>
            <div class="hero-main row">
                <div class="hero-text col-md-7 ">
                    <h1>Front-End React Developer 💻</h1>
                    <p className='pp'>Hi, I'm Mohammed Nader.👋 A passionate Front-End React Developer based in New Cairo, Egypt. 📍</p>
                    <div className='social'>
                        <a style={{fontSize: "3rem" , marginRight:"1.2rem", color:"#457B9D"}} aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/monader99/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a style={{fontSize: "3rem" , color:"#457B9D"}} aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/MoNader99">
                            <i class="fa-brands fa-github"></i>
                        </a></div>
                    </div>
                <div class="hero-img col-md-5 d-flex justify-content-center align-items-center"></div>
            </div>
        </div>

    </div>
  );
};

export default AboutSection;