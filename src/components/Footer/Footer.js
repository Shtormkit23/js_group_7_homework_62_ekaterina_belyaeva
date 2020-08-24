import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-logo">
                    <img src="Recipes-img/footer-logo.png" alt="logo"/>
                </div>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/menu">Menu</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;