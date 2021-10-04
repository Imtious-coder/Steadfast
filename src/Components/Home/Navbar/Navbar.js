import React from 'react';
import './Navbar.css';
import Logo from '../../Images/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light Navbar">
            <div class="container-fluid">
                {/* Logo here... */}
                <Link class="navbar-brand" href="#"> <img src={Logo} alt="" /> <span className="CompanyName White">Steadfast Int. Services</span> </Link>
                {/* Toogle button */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* Navigation start */}
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Employers
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" href="#">Talent Crowsourcing</Link></li>
                                <li><Link class="dropdown-item" href="#">Agency Management</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Agencies</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Recruiters</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Succes Stories
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" href="#">Employers who hired top talents</Link></li>
                                <li><Link class="dropdown-item" href="#">Recruiters who earned thousands</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Career</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">FAQ</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Contact Us</Link>
                        </li>
                        <li class="nav-item ms-2 mt-1">
                            <button className="NavbarButton">Login</button>
                        </li>
                        <li class="nav-item mt-1">
                            <button className="NavbarButton">Sign UP</button>
                        </li>
                    </ul>
                </div>
                {/* Navigation end */}
            </div>
        </nav>
    );
};

export default Navbar;