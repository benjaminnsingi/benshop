import React from "react";
import {Link} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi";

const Nav = () => {
    return (
        <div className="bg-second">
            <div className="bottom-header container">
                <ul className="main-menu">
                    <li><Link to="#">Accueil</Link></li>
                    <li className="mega-dropdown">
                        <Link to="#">Boutique<BiChevronDown className="BiChevronDown"/></Link>
                        <div className="mega-content">
                            <div className="row">
                                <div className="col-3 col-md-12">
                                    <div className="box">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li><Link to="">Wireless</Link></li>
                                            <li><Link to="">Inear headphone</Link></li>
                                            <li><Link to="">Overear headphone</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-12">
                                    <div className="box">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li><Link to="">Wireless</Link></li>
                                            <li><Link to="">Inear headphone</Link></li>
                                            <li><Link to="">Overear headphone</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-12">
                                    <div className="box">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li><Link to="">Wireless</Link></li>
                                            <li><Link to="">Inear headphone</Link></li>
                                            <li><Link to="">Overear headphone</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row img-row">
                                <div className="col-3">
                                    <div className="box">
                                        <img src="./images/chaussure_1a.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="box">
                                        <img src="./images/montre_1a.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="box">
                                        <img src="./images/sac_1a.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="box">
                                        <img src="./images/montre_2b.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;