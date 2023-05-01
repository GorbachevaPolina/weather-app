import React from "react";
import './header.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="active">Today</li>
                    <li>Tomorrow</li>
                    <li>3 days</li>
                    <li>7 days</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;