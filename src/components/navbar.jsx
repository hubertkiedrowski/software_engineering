import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li> 
                </ul>
                <ul>
                    <li className="nav-item">
                        <Link to="/ueberuns">Über Uns</Link>
                    </li> 
                </ul>
                <ul>
                    <li className="nav-item">
                        <Link to="/keyboard">Keyboard</Link>
                    </li> 
                </ul>
                <ul>
                    <li className="nav-item">
                        <Link to="/input">Input</Link>
                    </li> 
                </ul>
            </nav>
        </>
    );
};

export default Navbar;