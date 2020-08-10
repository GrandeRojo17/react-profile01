import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navStyle = {
        color: 'whitesmoke'
    }
    return (
        <nav>
            <h2>👨🏻‍🦰<a href="/" >David Yennerell</a>
            </h2>
            <ul className="nav-links">
                <Link to="/">
                    <li>About🧐</li>
                </Link>
                <Link to="/portfolio">
                    <li>Portfolio👔</li>
                </Link>
                <Link to="/contact" >
                    <li>Contact📞</li>
                </Link>
            </ul>




        </nav>
    )
}

export default Navbar;