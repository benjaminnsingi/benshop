import React, {useState} from "react";
import { AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

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

            <div className="navigation">
                <div className=" nav-center container d-flex">
                    <a href="" className="logo"><h1>Benshop</h1></a>

                    <ul className={click ? "nav-list open": "nav-list d-flex"}>
                        <li className="nav-item">
                            <a href="" className="nav-link">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Boutique</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">À propos</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Contact</a>
                        </li>
                        <li className="icons d-flex">
                            <a href="" className="icon">
                                <AiOutlineUser />
                            </a>
                            <div className="icon">
                                <BsSearch />
                            </div>
                            <div className="icon">
                                <BsHeart />
                                <span className="d-flex">0</span>
                            </div>
                            <a href="cart.html" className="icon">
                                <FiShoppingCart />
                                <span className="d-flex">0</span>
                            </a>
                        </li>
                    </ul>

                    <div className="icons d-flex">
                        <a href="" className="icon">
                            <AiOutlineUser />
                        </a>
                        <div className="icon">
                            <BsSearch />
                        </div>
                        <div className="icon">
                            <BsHeart />
                            <span className="d-flex">0</span>
                        </div>
                        <a href="" className="icon">
                            <FiShoppingCart />
                            <span className="d-flex">0</span>
                        </a>
                    </div>

                    <div className="hamburger" onClick={handleClick}>
                        <BiMenuAltLeft />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;