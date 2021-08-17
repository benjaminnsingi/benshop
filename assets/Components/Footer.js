import React from "react";
import "./scss/footer.scss";
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'


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
                    <span><AiFillFacebook /></span>
                    <span><AiOutlineInstagram /></span>
                    <span><AiFillTwitterCircle /></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;