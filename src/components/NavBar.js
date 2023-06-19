import React, {Component} from 'react';
import {GoLaw} from 'react-icons/go';

class NavBar extends Component {
    render() {
        return (
            <>
                <header className="header">

                    <a href="#" className="logo"> <i><GoLaw/></i> E-lawyer</a>

                    <nav className="navbar">
                        <a href="#">Avocatul tău digital</a>
                    </nav>

                    <div id="menu-btn" className="fas fa-bars"></div>

                </header>
            </>
        );
    }
}

export default NavBar;