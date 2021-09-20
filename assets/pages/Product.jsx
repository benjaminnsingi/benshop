import React from "react";
import {Link} from "react-router-dom";
import Cart from "../components/Cart";

const Product = () => {
    return (
        <section className="section products">
            <div className="products-layout container">
                <div className="col-1-of-4">

                    <div className="block-title">
                        <h3>Categories</h3>
                    </div>

                    <ul className="block-content">

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Jeans</span>
                                <small>(50)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Chaussures</span>
                                <small>(30)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Sacs</span>
                                <small>(10)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Manteaux</span>
                                <small>(15)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Accessoires</span>
                                <small>(20)</small>
                            </label>
                        </li>

                    </ul>

                    <div className="block-title">
                        <h3>Marques</h3>
                    </div>

                    <ul className="block-content">

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Gucci</span>
                                <small>(10)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Burberry</span>
                                <small>(7)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Valentino</span>
                                <small>(3)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Dolce & Gabbana</span>
                                <small>(30)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Moreschi</span>
                                <small>(15)</small>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">
                                <span>Givenchy</span>
                                <small>(55)</small>
                            </label>
                        </li>

                    </ul>

                </div>

                <div className="col-3-of-4">
                    <form action="">
                        <div className="item">
                            <label htmlFor="sort-by">Trier par</label>
                            <select name="sort-by" id="sort-by">
                                <option value="title" selected="selected">Nom</option>
                                <option value="number">Prix</option>
                                <option value="created">Nouveauté</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="order-by">Commander</label>
                            <select name="order-by" id="sort-by">
                                <option value="ASC" selected="selected">Croissant</option>
                                <option value="DESC">Decroissant</option>
                            </select>
                        </div>
                        <Link to="#">Appliquer</Link>
                    </form>

                    <Cart/>

                </div>

            </div>
        </section>
    )
}

export default Product;