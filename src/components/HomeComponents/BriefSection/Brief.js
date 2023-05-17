// import React, { useState, useEffect } from 'react';
import '../BriefSection/Brief.css'

const BriefSection = () => {
  return (
    <div className='brief-section '>
        <div className='content'>
            <div className='row'>
                <div style={{position:"relative"}} className='col-lg-5 col-sm-12 images'>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="emoji" class="react-emoji"/>
                    <img src='https://img.freepik.com/premium-vector/laptop-coding-concept-web-developer-programming-laptop-screen-code-illustration_100456-1753.jpg' alt='nothing'/>
                    <span className='rotating-img'><img src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="text"/></span>
                </div>
                <div className='col-lg-7 col-sm-12'>
                    <div class="text-side">
                        <h4 style={{fontWeight: '700', color: '#023e8a'}}>About me</h4>
                        <h3 style={{fontSize: '1.2rem',fontWeight: '900'}}>A dedicated Software Developer based in New Cairo, Egypt 📍</h3>
                        <p style={{color:"rgb(48 48 48)"}}>As a Junior Software Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. utilizing them to create visually appealing and responsive user interfaces, I offer designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BriefSection;