import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineMenu, AiOutlineUser} from "react-icons/ai";
import {BiX, BiChevronDown} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";


const Header = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header>

           <div className="mobile-menu bg-second">
               <Link to="#" className="mb-logo">Benshop</Link>
               <span className="mb-menu-toggle" id="mb-menu-toggle">
                   <AiOutlineMenu onClick={handleClick}/>
               </span>
           </div>

            <div className={click ? "header-wrapper active": "header-wrapper"}>
               <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                   <BiX onClick={handleClick}/>
               </span>

                <div className="bg-second">
                    <div className="top-header container">
                        <ul className="devided">
                            <li>+840123456789</li>
                            <li>benshop@gmail.com</li>
                        </ul>
                        <ul className="devided">
                            <li className="dropdown">
                                <Link to="#">ENGLISH</Link>
                                <BiChevronDown/>
                                <ul className="dropdown-content">
                                    <li><Link to="#">VIETNAMESE</Link></li>
                                    <li><Link to="#">JAPANESE</Link></li>
                                    <li><Link to="#">FRENCH</Link></li>
                                    <li><Link to="#">SPANISH</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#">ORDER TRACKING</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-main">
                    <div className="mid-header container">
                        <Link to="" className="logo">Benshop</Link>
                        <div className="search">
                            <input type="text" placeholder="Recherche"/>
                            <BsSearch className="bar"/>
                        </div>
                        <ul className="user-menu">
                            <li><Link to=""><AiOutlineUser/></Link></li>
                            <li><Link to=""><FiShoppingCart/></Link></li>
                        </ul>
                    </div>
                </div>
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
            </div>

        </header>
    )
}

export default Header;