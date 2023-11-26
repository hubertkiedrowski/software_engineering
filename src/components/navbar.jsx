import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                </ul>
                <ul>
                    <li>
                        <Link to="/ueberuns">Über Uns</Link>
                    </li> 
                </ul>
                <ul>
                    <li>
                        <Link to="/keyboard">Keyboard</Link>
                    </li> 
                </ul>
                <ul>
                    <li>
                        <Link to="/input">Input</Link>
                    </li> 
                </ul>
            </nav>
        </>
    );
}

export default Navbar;