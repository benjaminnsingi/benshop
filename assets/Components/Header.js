import React from "react";
import "./scss/Section.scss";
import Nav from "./Nav";

function Header () {

    return (

        <header className="header" id="header">
            <div className="top-nav">
                <div className="container d-flex">
                    <p>Commandez en ligne ou appelez-nous: (001) 2222-55555</p>
                    <ul className="d-flex">
                        <li><a href="">À propos de nous</a></li>
                        <li><a href="">Faq</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <Nav/>
        </header>
    )
}

export default Header;