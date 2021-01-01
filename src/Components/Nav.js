import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
    <nav className="nav">
        <ul className="nav__ul">
            <li className="nav__li">
                <Link className="nav__link" to="/">Home</Link>
            </li>

            <li className="nav__li">
                <Link className="nav__link" to="/Build">Build</Link>
            </li>

            <li className="nav__li">
                <Link className="nav__link" to="/Docs">Docs</Link>
            </li>
        </ul>
    </nav>
    );
}