import React from "react";
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/portfolio" className="nav-link" aria-current="page">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className="nav-link" aria-current="page">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page">Contact</Link>
            </li>
            {/* <li className="nav-item">
                <Link to="/resume" className="nav-link" aria-current="page">Resume</Link>
            </li> */}
        </ul>
    );
}

export default Navbar;

