import React from "react";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
       <div>
           <footer className="bg-second">
               <div className="container">
                   <div className="row">
                       <div className="col-3 col-md-6">
                           <h3 className="footer-head">Produits</h3>
                           <ul className="menu">
                               <li><a href="#">Centre d'assistance</a></li>
                               <li><a href="#">Nous contacter</a></li>
                               <li><a href="#">Garantie</a></li>
                           </ul>
                       </div>
                       <div className="col-3 col-md-6">
                           <h3 className="footer-head">services</h3>
                           <ul className="menu">
                               <li><a href="#">Centre d'assistance</a></li>
                               <li><a href="#">Nous contacter</a></li>
                               <li><a href="#">Garantie</a></li>
                           </ul>
                       </div>
                       <div className="col-3 col-md-6">
                           <h3 className="footer-head">support</h3>
                           <ul className="menu">
                               <li><a href="#">Centre d'assistance</a></li>
                               <li><a href="#">Nous contacter</a></li>
                               <li><a href="#">Garantie</a></li>
                           </ul>
                       </div>
                       <div className="col-3 col-md-6 col-sm-12">
                           <div className="contact">
                               <h3 className="contact-header">
                                  Benshop
                               </h3>
                               <ul className="contact-socials">
                                   <li>
                                       <Link to="#"><AiFillFacebook/></Link>
                                   </li>
                                   <li>
                                       <Link to="#"><AiFillInstagram/></Link>
                                   </li>
                                   <li>
                                       <Link to="#"><AiFillYoutube/></Link>
                                   </li>
                                   <li>
                                       <Link to="#"><AiFillTwitterCircle/></Link>
                                   </li>
                               </ul>
                           </div>
                           <div className="subscribe">
                               <input type="email" placeholder="SAISISSEZ VOTRE E-MAIL"/>
                                   <button>s'abonner</button>
                           </div>
                       </div>
                   </div>
               </div>
           </footer>
       </div>
    )
}

export default Footer;