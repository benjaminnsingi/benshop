import React from "react";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div className="col-4 col-md-6 col-sm-12">
            <div className="product-card">
                <div className="product-card-img">
                    <img src="./images/product-2.jpg" alt="" />
                </div>
                <div className="product-card-info">
                    <div className="product-btn">
                        <Link href="" className="btn-flat btn-hover btn-shop-now">shop now</Link>
                        <button className="btn-flat btn-hover btn-cart-add">
                            <i className="fas fa-shopping-cart"/>
                        </button>
                        <button className="btn-flat btn-hover btn-cart-add">
                            <i className="far fa-heart"/>
                        </button>
                    </div>
                    <div className="product-card-name">
                        JBL E55BT KEY BLACK
                    </div>
                    <div className="product-card-price">
                        <span><del>400</del></span>
                        <span className="curr-price">300</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;