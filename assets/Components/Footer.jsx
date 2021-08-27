import React from "react";
import "./scss/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col d-flex">
                    <h4>INFORMATION</h4>
                    <a href="">About us</a>
                    <a href="">Contact Us</a>
                    <a href="">Term & Conditions</a>
                    <a href="">Shipping Guide</a>
                </div>
                <div className="col d-flex">
                    <h4>USEFUL LINK</h4>
                    <a href="">Online Store</a>
                    <a href="">Customer Services</a>
                    <a href="">Promotion</a>
                    <a href="">Top Brands</a>
                </div>
                <div className="col d-flex">
                    <span><i className="fab fa-facebook-f"/></span>
                    <span><i className="fab fa-instagram"/></span>
                    <span><i className="fab fa-twitter"/></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;