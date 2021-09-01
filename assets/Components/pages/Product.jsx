import React, {useState} from "react";
import {Link} from "react-router-dom";

const Product = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="bg-main">
            <div className="container-main">
                <div className="box">
                    <div className="breadcumb">
                        <Link href="">Accueil</Link>
                        <span><i className="fas fa-chevron-right"/></span>
                        <Link href="">all products</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="row">
                        <div className={click ? "filter-col active": "col-3 filter-col"} id="filter-col">
                            <div className="box filter-toggle-box">
                                <button className="btn-flat btn-hover" id="filter-close" onClick={handleClick}>Fermer</button>
                            </div>
                            <div className="box">
                                <span className="filter-header">
                                    Categories
                                </span>
                                <ul className="filter-list">
                                    <li><Link href="#">Wireless</Link></li>
                                    <li><Link href="#">In-ear headphone</Link></li>
                                    <li><Link href="#">Over-ear headphone</Link></li>
                                    <li><Link href="#">sport headphone</Link></li>
                                </ul>
                            </div>
                            <div className="box">
                            <span className="filter-header">
                                Prix
                            </span>
                                <div className="price-range">
                                    <input type="text" />
                                    <span>-</span>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="box">
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status1" />
                                            <label htmlFor="status1">
                                                On sale
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status2" />
                                            <label htmlFor="status2">
                                                In stock
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="status3" />
                                            <label htmlFor="status3">
                                                Featured
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="box">

                            <span className="filter-header">
                                Marques
                            </span>

                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember1"  />
                                            <label htmlFor="remember1">
                                                JBL
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember2" />
                                            <label htmlFor="remember2">
                                                Beat
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember3" />
                                            <label htmlFor="remember3">
                                                Logitech
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember4" />
                                            <label htmlFor="remember4">
                                                Samsung
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="remember5" />
                                            <label htmlFor="remember5">
                                                Sony
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                </ul>

                            </div>


                            <div className="box">
                            <span className="filter-header">
                                Couleurs
                            </span>
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="red" />
                                            <label htmlFor="red">
                                                Red
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="blue" />
                                            <label htmlFor="blue">
                                                Blue
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="white" />
                                            <label htmlFor="white">
                                                White
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="pink" />
                                            <label htmlFor="pink">
                                                Pink
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input type="checkbox" id="yellow" />
                                            <label htmlFor="yellow">
                                                Yellow
                                                <i className="fas fa-check"/>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-9 col-md-12">
                            <div className="box filter-toggle-box">
                                <button className="btn-flat btn-hover" id="filter-toggle" onClick={handleClick}>filter</button>
                            </div>
                            <div className="box">
                                <div className="row" id="products">
                                    <div className="col-4 col-md-6 col-sm-12">
                                        <div className="product-card">
                                            <div className="product-card-img">
                                                <img src="./images/product-1.jpg" alt="" />
                                                <img src="./images/product-2.jpg" alt="" />
                                            </div>
                                            <div className="product-card-info">
                                                <div className="product-btn">
                                                    <Link href="#" className="btn-flat btn-hover btn-shop-now">
                                                        Acheter maintenant
                                                    </Link>
                                                    <button className="btn-flat btn-hover btn-cart-add">
                                                        <i className="fas fa-shopping-cart"/>
                                                    </button>
                                                    <button className="btn-flat btn-hover btn-cart-add">
                                                        <i className="far fa-heart"/>
                                                    </button>
                                                </div>
                                                <div className="product-card-name">
                                                    product
                                                </div>
                                                <div className="product-card-price">
                                                    <span><del>300€</del></span>
                                                    <span className="curr-price">100€</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-6 col-sm-12">
                                        <div className="product-card">
                                            <div className="product-card-img">
                                                <img src="./images/product-3.jpg" alt="" />
                                                <img src="./images/product-4.jpg" alt="" />
                                            </div>
                                            <div className="product-card-info">
                                                <div className="product-btn">
                                                    <Link href="#" className="btn-flat btn-hover btn-shop-now">
                                                        Acheter maintenant
                                                    </Link>
                                                    <button className="btn-flat btn-hover btn-cart-add">
                                                        <i className="fas fa-shopping-cart"/>
                                                    </button>
                                                    <button className="btn-flat btn-hover btn-cart-add">
                                                        <i className="far fa-heart"/>
                                                    </button>
                                                </div>
                                                <div className="product-card-name">
                                                    product
                                                </div>
                                                <div className="product-card-price">
                                                    <span><del>300€</del></span>
                                                    <span className="curr-price">100€</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <ul className="pagination">
                                    <li><Link href="#"><i className="fas fa-chevron-left"/></Link></li>
                                    <li><Link href="#" className="active">1</Link></li>
                                    <li><Link href="#">2</Link></li>
                                    <li><Link href="#">3</Link></li>
                                    <li><Link href="#">4</Link></li>
                                    <li><Link href="#">5</Link></li>
                                    <li><Link href="#"><i className="fas fa-chevron-right"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;