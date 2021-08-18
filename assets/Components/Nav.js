import React, {useState} from "react";
import {AiOutlineUser} from "react-icons/ai";
import {BsHeart, BsSearch} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import {BiMenuAltLeft} from "react-icons/bi";
import { Link } from "react-router-dom";


function Nav() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div className="navigation">
            <div className=" nav-center container d-flex">
                <Link to="/" className="logo"><h1>Benshop</h1></Link>

                <ul className={click ? "nav-list open": "nav-list d-flex"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">Boutique</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">À propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">Contact</Link>
                    </li>
                    <li className="icons d-flex">
                        <Link to="/login" className="icon">
                            <AiOutlineUser />
                        </Link>
                        <div className="icon">
                            <BsSearch />
                        </div>
                        <div className="icon">
                            <BsHeart />
                            <span className="d-flex">0</span>
                        </div>
                        <Link to="" className="icon">
                            <FiShoppingCart />
                            <span className="d-flex">0</span>
                        </Link>
                    </li>
                </ul>

                <div className="icons d-flex">
                    <Link to="/login" className="icon">
                        <AiOutlineUser/>
                    </Link>
                    <div className="icon">
                        <BsSearch />
                    </div>
                    <div className="icon">
                        <BsHeart />
                        <span className="d-flex">0</span>
                    </div>
                    <Link to="" className="icon">
                        <FiShoppingCart />
                        <span className="d-flex">0</span>
                    </Link>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    <BiMenuAltLeft />
                </div>
            </div>
        </div>
    );
}

export default Nav;