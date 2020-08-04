import React from "react";
import { Link } from "react-router-dom";

//quick mock up of the navigation component
function Navbar() {
    return (
        <div className="container-fluid" id="nav">
            <section
                className="jumbotron jumbotron-fluid"
            //could do a style=" " here if I want

            >
                <div className="container">
                    <h1 className="display-4">David Yennerell</h1>
                    <p className="lead">WebDev Simplified</p>
                </div>
                <ul>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={
                                window.location.pathname === "/portfolio"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Portfolio
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/About"
                            className={
                                window.location.pathname === "/About"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
              </Link>
                    </li>


                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={
                                window.location.pathname === "/contact"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Contact
              </Link>
                    </li>

                    <li className="nav-item">

                    </li>
                </ul>


            </section >
        </div >
    );
}

export default Navbar;