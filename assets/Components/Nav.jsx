import React, {useState} from "react";
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
                        <Link to="/Product" className="nav-link">Boutique</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">À propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">Contact</Link>
                    </li>
                    <li className="icons d-flex">
                        <Link to="/login" className="icon">
                            <i className="far fa-user"/>
                        </Link>
                        <div className="icon">
                            <i className="fas fa-search"/>
                        </div>
                        <div className="icon">
                            <i className="far fa-heart"/>
                            <span className="d-flex">0</span>
                        </div>
                        <Link to="" className="icon">
                            <i className="fas fa-shopping-cart"/>
                            <span className="d-flex">0</span>
                        </Link>
                    </li>
                </ul>

                <div className="icons d-flex">
                    <Link to="/login" className="icon">
                        <i className="far fa-user"/>
                    </Link>
                    <div className="icon">
                        <i className="fas fa-search"/>
                    </div>
                    <div className="icon">
                        <i className="far fa-heart"/>
                        <span className="d-flex">0</span>
                    </div>
                    <Link to="" className="icon">
                        <i className="fas fa-shopping-cart"/>
                        <span className="d-flex">0</span>
                    </Link>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    <i className="fas fa-bars"/>
                </div>
            </div>
        </div>
    );
}

export default Nav;