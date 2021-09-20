import React from "react";
import {FiHeart, FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";

const Cart = () => {
       return (
           <div className="product-layout">
              <div className="product">
                  <div className="img-container">
                      <img src="./images/28_2035-cr-270x335.jpg" alt=""/>
                      <div className="addCart">
                          <FiShoppingCart/>
                      </div>
                      <ul className="side-icons">
                          <span><FiHeart/></span>
                      </ul>
                  </div>
                  <div className="bottom">
                      <Link to="#">Bambi Print Mini Backpack</Link>
                      <div className="price">
                          <span>150€</span>
                      </div>
                  </div>
              </div>

              <div className="product">
                  <div className="img-container">
                      <img src="./images/30_2344-270x335.jpg" alt=""/>
                      <div className="addCart">
                          <FiShoppingCart/>
                      </div>
                      <ul className="side-icons">
                          <span><FiHeart/></span>
                      </ul>
                  </div>
                  <div className="bottom">
                      <Link to="#">Bambi Print Mini Backpack</Link>
                      <div className="price">
                          <span>150€</span>
                      </div>
                  </div>
              </div>

              <div className="product">
                  <div className="img-container">
                      <img src="./images/34_2004-270x335.jpg" alt=""/>
                      <div className="addCart">
                          <FiShoppingCart/>
                      </div>
                      <ul className="side-icons">
                          <span><FiHeart/></span>
                      </ul>
                  </div>
                  <div className="bottom">
                      <Link to="#">Bambi Print Mini Backpack</Link>
                      <div className="price">
                          <span>150€</span>
                      </div>
                  </div>
              </div>

              <div className="product">
                  <div className="img-container">
                      <img src="./images/36_2000-270x335.jpg" alt=""/>
                      <div className="addCart">
                          <FiShoppingCart/>
                      </div>
                      <ul className="side-icons">
                          <span><FiHeart/></span>
                      </ul>
                  </div>
                  <div className="bottom">
                      <Link to="#">Bambi Print Mini Backpack</Link>
                      <div className="price">
                          <span>150€</span>
                      </div>
                  </div>
              </div>

              <div className="product">
                  <div className="img-container">
                      <img src="./images/41_2350-270x335.jpg" alt=""/>
                      <div className="addCart">
                          <FiShoppingCart/>
                      </div>
                      <ul className="side-icons">
                          <span><FiHeart/></span>
                      </ul>
                  </div>
                  <div className="bottom">
                      <Link to="#">Bambi Print Mini Backpack</Link>
                      <div className="price">
                          <span>150€</span>
                      </div>
                  </div>
              </div>
           </div>
       )
}

export default Cart;