import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Fantacy Game</h1>
            <nav>
                <a href="/">Create Team</a>
                <a href="/">See your Team</a>
                <a href="/">Manage Your Team</a>
            </nav>
        </div>
    );
};

export default Header;