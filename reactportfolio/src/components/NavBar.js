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
                <Link to="/Portfolio">
                    <li>Portfolio👔</li>
                </Link>
                <Link to="/Contact" >
                    <li>Contact📞</li>
                </Link>
            </ul>




        </nav>
    )
}

export default Navbar;