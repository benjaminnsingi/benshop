import React from "react";
import "./scss/Section.scss";


function Section () {

    return (
        <div className="hero">
            <div className="glide" id="glide_1">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <div className="center">
                                <div className="left">
                                    <span className="">Nouvelle inspiration 2021</span>
                                    <h1 className="">NOUVELLE COLLECTION !</h1>
                                    <p>Tendance de la collection de style pour hommes et femmes</p>
                                    <a href="#" className="hero-btn">Acheter maintenant</a>
                                </div>
                                <div className="right">
                                    <img className="img1" src="images/hero-1.png" alt=""/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section;