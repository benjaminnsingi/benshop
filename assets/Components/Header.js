import React from "react";
import "./scss/Section.scss";
import Nav from "./Nav";
import { Link } from 'react-router-dom';

function Header () {

    return (

        <header className="header" id="header">
            <div className="top-nav">
                <div className="container d-flex">
                    <p>Commandez en ligne ou appelez-nous: (001) 2222-55555</p>
                    <ul className="d-flex">
                        <li><Link to="">À propos de nous</Link></li>
                        <li><Link to="">Faq</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <Nav/>
        </header>
    )
}

export default Header;