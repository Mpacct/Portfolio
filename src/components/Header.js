import React from "react";
import Navbar from './Navbar'
import initialsLogo from "../assets/InitialsLogo.png"

function Header() {

    return (
        <header className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={initialsLogo} alt="Logo" width="50" height="50" className="d-inline-block align-text-center me-2"/>
                        Marcus Paccapaniccia
                </a>
                <Navbar className="d-flex justify-content-end"/>
            </div>
            
        </header>
    );
}

export default Header;
