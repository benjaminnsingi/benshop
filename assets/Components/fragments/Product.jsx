import React from "react";
import Cart from "../Cart";


const Product = () => {

    return(
        <section className="section new-arrival">
            <div className="title">
                <h1>NOUVEAUX ARRIVANTS</h1>
                <p>Tous les derniers produits sélectionnés par les designers de notre magasin</p>
            </div>
            <Cart/>
        </section>
    );
}

export default Product;