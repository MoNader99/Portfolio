// import React, { useState, useEffect } from 'react';
import '../BriefSection/Brief.css'

const BriefSection = () => {
  return (
    <div className='brief-section '>
        <div className='content'>
            <div className='row'>
                <div className='col-lg-5 col-sm-12'>
                    <img src='https://www.espine.in/blog/wp-content/uploads/2022/08/software-developer.jpg' alt='nothing'/>
                </div>
                <div className='col-lg-7 col-sm-12'>
                    <div class="text-side">
                        <h4 style={{fontWeight: '700', color: '#023e8a'}}>About me</h4>
                        <h3 style={{fontSize: '1.2rem',fontWeight: '900'}}>A dedicated Software Developer based in New Cairo, Egypt 📍</h3>
                        <p style={{color:"#767676"}}>As a Junior Software Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. utilizing them to create visually appealing and responsive user interfaces. Additionally, I have a strong background in machine learning, computer vision, and natural language processing (NLP). I have successfully implemented models using TensorFlow and Keras, and I am adept at leveraging visualization libraries such as Seaborn and Matplotlib to analyze and present data effectively.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BriefSection;