import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
    <nav className="nav">
        <ul className="nav__ul">
            <Link to="/" className="nav__logo">
                <img src="./images/logo.png"/>
            </Link>

            <div className="nav__ul--container">
                <li className="nav__li">
                    <Link className="nav__link" to="/">Home</Link>
                </li>

                <li className="nav__li">
                    <Link className="nav__link" to="/Build">Build</Link>
                </li>

                <li className="nav__li">
                    <Link className="nav__link" to="/Docs">Docs</Link>
                </li>

                <li className="nav__li">
                    <Link className="nav__link" to="/GetCode">GetCode</Link>
                </li>
            </div>
        </ul>
    </nav>
    );
}