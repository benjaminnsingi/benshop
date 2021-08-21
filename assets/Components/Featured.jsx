import React from "react";
import {BsHeart, BsSearch} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";


const Featured = () => {

     return (
         <section className="section new-arrival">
              <div className="title">
                   <p>Toutes les dernières nouveautés choisies par les designers de notre magasin.</p>
              </div>


             <div className="product-center">
                 <div className="product-item">
                     <div className="overlay">
                         <a className="product-thumb">
                             <img src="./images/product-2.jpg" alt="" />
                         </a>
                     </div>
                     <div className="product-info">
                         <span>MEN'S CLOTHES</span>
                         <a href="">Quis Nostrud Exercitation</a>
                         <h4>$400</h4>
                     </div>
                     <ul className="icons">
                         <li><BsHeart /></li>
                         <li><BsSearch /></li>
                         <li><FiShoppingCart/></li>
                     </ul>
                 </div>

                 <div className="product-item">
                     <div className="overlay">
                         <a className="product-thumb">
                             <img src="./images/product-4.jpg" alt="" />
                         </a>
                     </div>
                     <div className="product-info">
                         <span>MEN'S CLOTHES</span>
                         <a href="">Quis Nostrud Exercitation</a>
                         <h4>$500</h4>
                     </div>
                     <ul className="icons">
                         <li><BsHeart /></li>
                         <li><BsSearch /></li>
                         <li><FiShoppingCart/></li>
                     </ul>
                 </div>

                 <div className="product-item">
                     <div className="overlay">
                         <a className="product-thumb">
                             <img src="./images/product-3.jpg" alt="" />
                         </a>
                     </div>
                     <div className="product-info">
                         <span>MEN'S CLOTHES</span>
                         <a href="">Quis Nostrud Exercitation</a>
                         <h4>$700</h4>
                     </div>
                     <ul className="icons">
                         <li><BsHeart /></li>
                         <li><BsSearch /></li>
                         <li><FiShoppingCart/></li>
                     </ul>
                 </div>

                 <div className="product-item">
                     <div className="overlay">
                         <a className="product-thumb">
                             <img src="./images/product-1.jpg" alt="" />
                         </a>
                     </div>
                     <div className="product-info">
                         <span>MEN'S CLOTHES</span>
                         <a href="">Quis Nostrud Exercitation</a>
                         <h4>$700</h4>
                     </div>
                     <ul className="icons">
                         <li><BsHeart /></li>
                         <li><BsSearch /></li>
                         <li><FiShoppingCart/></li>
                     </ul>
                 </div>
             </div>
         </section>
     );
}

export default Featured;