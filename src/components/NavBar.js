import React, {Component} from 'react';
import {GoLaw} from 'react-icons/go';

class NavBar extends Component {
    render() {
        return (
            <>
                <header className="header">

                    <a href="#" className="logo"> <i><GoLaw/></i> E-lawyer</a>

                    <nav className="navbar">
                        <a href="#home">Acasă</a>
                        <a href="#about">Despre noi</a>
                        <a href="#blogs">Contact</a>
                        <a href="#blogs">Contul tău</a>
                    </nav>

                    <div id="menu-btn" className="fas fa-bars"></div>

                </header>
            </>
        );
    }
}

export default NavBar;