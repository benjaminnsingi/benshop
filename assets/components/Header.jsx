import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineUser} from "react-icons/ai";
import {BiX, BiChevronDown} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import {FiHeart, FiShoppingCart} from "react-icons/fi";
import Nav from "./Nav";
import {Link} from "react-router-dom";


const Header = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (

         <>
             <header>

                 <div className="mobile-menu bg-second">
                     <Link to="/" className="mb-logo">Benshop</Link>
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
                                 <li><Link to="#">SUIVI DES COMMANDES</Link></li>
                             </ul>
                         </div>
                     </div>

                     <div className="bg-main">
                         <div className="mid-header container">
                             <Link to="/" className="logo">Benshop</Link>
                             <div className="search">
                                 <input type="text" placeholder="Recherche"/>
                                 <BsSearch className="bar"/>
                             </div>
                             <ul className="user-menu">
                                 <li><Link to=""><AiOutlineUser/></Link></li>
                                 <li className="icon">
                                     <Link to="">
                                         <FiHeart/>
                                         <span className="d-flex-heart">0</span>
                                     </Link>
                                 </li>
                                 <li className="icon">
                                     <Link to="">
                                         <FiShoppingCart/>
                                         <span className="d-flex">0</span>
                                     </Link>
                                 </li>
                             </ul>
                         </div>
                     </div>
                     <Nav/>
                 </div>

             </header>
         </>
    )
}

export default Header;