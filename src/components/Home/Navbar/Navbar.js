import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
           <a class="navbar-brand" href="#">
                <img class="logo  mt-4 ml-5"src={Logo} alt="logo"/>
            </a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto mt-5">
                    <li class="nav-item active ">
                        <Link class="nav-link  mr-5" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-dark mr-5" to="#">Our Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-dark mr-5" to="/team">Our Team</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-dark mr-5" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/login"><button className="btn-color text-white">Login</button></Link>
                    </li>
                 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;