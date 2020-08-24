import React from "react";
import './NavBlock.css'
import {NavLink} from "react-router-dom";

const NavBlock = () => {
    return (
        <div className="nav-block">
            <div className="nav-items">
                <div className="nav-logo">
                    <img src="Recipes-img/logo.png" alt="logo"/>
                </div>
                <ul className="nav-links">
                    <li><NavLink exact to="/"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#921026"
                     }}>Home</NavLink></li>

                    <li><NavLink exact to="/recipes"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#921026"
                     }}>Recipes</NavLink></li>

                    <li><NavLink exact to="/menu"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#921026"
                     }}>Menu</NavLink></li>
                </ul>
                <div className="nav-search">
                    <input type="text" placeholder="Find a recipe"/>
                </div>
            </div>
        </div>
    )
};

export default NavBlock;