import React, {useState} from "react";
import Cart from "../Cart";
import Dropdown from "../fragments/Dropdown";

const Product = () => {

    const [selected, setSelected] = useState("MARQUES");

    return (
        <section className="section all-products" id="products">
            <div className="top container">
                <ul className="all-products-shop">
                    <li><a href="">Accessoires</a></li>
                    <li><a href="">Boucles d'oreilles</a></li>
                    <li><a href="">Montres</a></li>
                </ul>
                <h1>Tous les produits</h1>

                <Dropdown selected={selected} setSelected={setSelected}/>
                <Cart/>
            </div>
        </section>
    )
}

export default Product;