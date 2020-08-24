import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavBlock from "../../components/NavBlock/NavBlock";
import Desserts from "../../components/Desserts/Desserts";
import './Menu.css'

const Menu = () => {
    const [desserts] = useState([
        {src: "Recipes-img/111.jpg", id: '1', order: "32", name: "New York Cheesecake"},
        {src: "Recipes-img/123.jpg", id: '2', order: "25", name: "Hot Caramel Sundae"},
        {src: "Recipes-img/345.jpg", id: '3', order: "48", name: "Hot Fudge Sundae"},
        {src: "Recipes-img/678.jpg", id: '4', order: "21", name: "McFlurry® with M&M'S® Candies"},
        {src: "Recipes-img/222.jpg", id: '5', order: "17", name: "Hot Fudge Sundae"},
        {src: "Recipes-img/333.jpg", id: '6', order: "33", name: "Hot Caramel Sundae"},
        {src: "Recipes-img/111.jpg", id: '7', order: "19", name: "Roasted Marrow"},
        {src: "Recipes-img/food1.png", id: '8', order: "24", name: "McGriddles®"}
    ]);

    return (
        <>
            <Header/>
            <NavBlock/>
            <h2 className="title">Delicious food</h2>
            <div className="desserts">
                {desserts.map(dessert => (
                    <Desserts
                        name={dessert.name}
                        key={dessert.id}
                        src={dessert.src}
                    order={dessert.order}/>
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default Menu;