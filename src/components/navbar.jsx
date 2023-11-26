import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/keyboard">Keyboard</Link>
                    </li>
                    <li>
                        <Link to="/ueberuns">Über uns</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;