// import React, { useState, useEffect } from 'react';
import '../AboutSection/About.css'

const AboutSection = () => {
  return (
    <div className='about-section '>
        <div className='container d-flex justify-content-center align-items-center'>
            <div class="hero-main row">
                <div class="hero-text col-md-7 ">
                    <h1>Software Developer</h1>
                    <p className='pp'>Hi, I'm Mohammed Nader. A passionate Software Developer based in New Cairo, Egypt. 📍</p>
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

        <p style={{marginLeft:"100px"}} className='tech-stack my-4'>Tech Stack</p>
        <div class="skills">
            <div class="logos ">
            <ul>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" alt="React"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" title="Redux" alt="Redux"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" title=".NET" alt=".NET"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" title="Node.js" alt="Node.js"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" alt="MongoDB"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL" alt="MySQL"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" title="PostgreSQL" alt="PostgreSQL"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" title="Sass" alt="Sass"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" title="Bootstrap" alt="Bootstrap"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" title="HTML5" alt="HTML5"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" title="CSS3" alt="CSS3"/>
                </li>
                <li>
                    <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" title="Flutter" alt="Flutter"/>
                </li>
                <li>
                    <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" title="Dart" alt="Dart"/>
                </li>
                <li>
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" title="Figma" alt="Figma"/>
                </li>
                <li>
                    <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" title="Flask" alt="Flask"/>
                </li>
                
                <li>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" title="Git" alt="Git"/>
                </li>
                {/* <li>
                    <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" title="TensorFlow" alt="TensorFlow"/>
                </li>
                <li>
                    <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" title="Seaborn" alt="Seaborn"/>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" title="scikit-learn" alt="scikit-learn"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" title="C++" alt="C++"/>
                </li>                
                <li>
                    <img src="https://cdn.worldvectorlogo.com/logos/django.svg" title="Django" alt="Django"/>
                </li>
                
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" title="MATLAB" alt="MATLAB"/>
                </li>                
                <li>
                    <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" title="OpenCV" alt="OpenCV"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" title="pandas" alt="pandas"/>
                </li>
                
                <li>
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" title="Postman" alt="Postman"/>
                </li>
                <li>
                    <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" title="PyTorch" alt="PyTorch"/>
                </li>
                <li>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" title="Python" alt="Python"/>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" title="Qt" alt="Qt"/>
                </li> */}
            </ul>

            </div>
        </div>

    </div>
  );
};

export default AboutSection;