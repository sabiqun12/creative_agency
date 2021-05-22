import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import logos from '../../../images/logos/Frame.png';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <div className="container d-flex justify-content-center mt-5">
                <div className="col-md-5 pt-5">
                    <h1 className="font-weight-bold">Let's Grow Your Brand To The Next Level</h1>
                    <p className="text-dark mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                    nemo doloremque quibusdam
                   sit odit?</p>
                    <button className="brand-color text-white mt-2">Get Started</button>
                </div>
                <div className="col-md-7 mr-3">
                    <img className="img-fluid" src={logos} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;