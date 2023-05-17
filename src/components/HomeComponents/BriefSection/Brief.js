// import React, { useState, useEffect } from 'react';
import '../BriefSection/Brief.css'

const BriefSection = () => {
  return (
    <div className='brief-section '>
        <div className='content'>
            <div className='row'>
                <div className='col-lg-5 col-sm-12'>
                    <img src='https://img.freepik.com/premium-vector/laptop-coding-concept-web-developer-programming-laptop-screen-code-illustration_100456-1753.jpg' alt='nothing'/>
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