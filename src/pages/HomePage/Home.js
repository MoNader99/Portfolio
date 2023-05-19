// import React, { useState, useEffect } from 'react';
import '../HomePage/Home.css'
import Navbar from "../../components/HomeComponents/Navbar/navbar.js"
import AboutSection from '../../components/HomeComponents/AboutSection/About';
import BriefSection from '../../components/HomeComponents/BriefSection/Brief';

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

        <h1>dd</h1>
    </div>
  );
};

export default HomePage;