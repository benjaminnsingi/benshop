import React from "react";
import {FiHeart, FiShoppingCart} from "react-icons/fi";

const Selling = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="section-header">
                    <h2>MEILLEURES VENTES</h2>
                </div>
                <div className="row">

                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="product-card">
                            <div className="product-card-img">
                                <img src="./images/30_2344-270x335.jpg" alt="" />
                                <img src="./images/30_2345-270x335.jpg" alt="" />
                            </div>
                            <div className="product-card-info">
                                <div className="product-btn">
                                    <button className="btn-flat btn-hover btn-shop-now">Achetez maintenant</button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiShoppingCart/>
                                    </button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiHeart/>
                                    </button>
                                </div>
                                <div className="product-card-name">
                                    Belle tenue
                                </div>
                                <div className="product-card-price">
                                    <span><del>300€</del></span>
                                    <span className="curr-price">200€</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="product-card">
                            <div className="product-card-img">
                                <img src="./images/34_2004-270x335.jpg" alt="" />
                                <img src="./images/34_2005-270x335.jpg" alt="" />
                            </div>
                            <div className="product-card-info">
                                <div className="product-btn">
                                    <button className="btn-flat btn-hover btn-shop-now">Achetez maintenant</button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiShoppingCart/>
                                    </button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiHeart/>
                                    </button>
                                </div>
                                <div className="product-card-name">
                                    Belle tenue
                                </div>
                                <div className="product-card-price">
                                    <span><del>300€</del></span>
                                    <span className="curr-price">200€</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="product-card">
                            <div className="product-card-img">
                                <img src="./images/36_2000-270x335.jpg" alt="" />
                                <img src="./images/36_2001-270x335.jpg" alt="" />
                            </div>
                            <div className="product-card-info">
                                <div className="product-btn">
                                    <button className="btn-flat btn-hover btn-shop-now">Achetez maintenant</button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiShoppingCart/>
                                    </button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiHeart/>
                                    </button>
                                </div>
                                <div className="product-card-name">
                                    Belle tenue
                                </div>
                                <div className="product-card-price">
                                    <span><del>300€</del></span>
                                    <span className="curr-price">200€</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="product-card">
                            <div className="product-card-img">
                                <img src="./images/43_1969-270x335.jpg" alt="" />
                                <img src="./images/43_1971-270x335.jpg" alt="" />
                            </div>
                            <div className="product-card-info">
                                <div className="product-btn">
                                    <button className="btn-flat btn-hover btn-shop-now">Achetez maintenant</button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiShoppingCart/>
                                    </button>
                                    <button className="btn-flat btn-hover btn-cart-add">
                                        <FiHeart/>
                                    </button>
                                </div>
                                <div className="product-card-name">
                                    Belle tenue
                                </div>
                                <div className="product-card-price">
                                    <span><del>300€</del></span>
                                    <span className="curr-price">200€</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Selling;