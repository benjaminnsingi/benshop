import React from "react";
import Cart from "../Cart";


const Featured = () => {

     return (
         <section className="section new-arrival">
              <div className="title">
                   <p>Toutes les dernières nouveautés choisies par les designers de notre magasin.</p>
              </div>
              <Cart/>
         </section>
     );
}

export default Featured;