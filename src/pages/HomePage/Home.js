// import React, { useState, useEffect } from 'react';
import '../HomePage/Home.css'
import Navbar from "../../components/HomeComponents/Navbar/navbar.js"
import AboutSection from '../../components/HomeComponents/AboutSection/About';
import BriefSection from '../../components/HomeComponents/BriefSection/Brief';
import ProjectSection from '../../components/HomeComponents/ProjectsSection/ProjectSection/ProjectSection';

const HomePage = () => {
  return (
    <div className='home-page'>

        <Navbar></Navbar>

        <div id='home' style={{marginTop:'8rem'}} className='content '>
          <AboutSection></AboutSection>
        </div>

        <div id="about" className='brief'>
          <BriefSection></BriefSection>
        </div>

        <div id='Projects' style={{marginTop:'0rem'}} className='projects mb-5'>
            <ProjectSection/>
        </div>

        to be continued ... 
    </div>
  );
};

export default HomePage;