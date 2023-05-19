// import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../Navbar/navbar.css'

const Navbar = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='CustomNavBar'>
            <Link className="navbar-brand" >MoNader.dev</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                    <Link style={{cursor:"poitner!important"}} smooth={true} duration={200} offset={-100} to="home" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} duration={200} offset={-100} to="about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} duration={200} offset={-100} to="Projects" className="nav-link" >Projects</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} duration={200} offset={-100} to="Contact" className="nav-link" >Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;