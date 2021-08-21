import React from "react";
import "./scss/promo.scss";


const Promo = () => {

     return (
         <section className="section banner">
             <div className="left">
                 <span className="trend">Tendance Design</span>
                 <h1>Nouvelle Collection</h1>
                 <a  href="" className="btn btn-1">Découvrez maintenant</a>
             </div>
             <div className="right">
                 <img src="./images/banner.png" alt="" />
             </div>
         </section>
     )
}

export default Promo;