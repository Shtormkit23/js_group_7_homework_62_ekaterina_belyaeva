import React from 'react';
import Header from "../../components/Header/Header";
import Recipe from "../../components/Recipe/Recipe";
import Footer from "../../components/Footer/Footer";
import NavBlock from "../../components/NavBlock/NavBlock";

const PieRecipe = () => {
    return (
        <>
            <Header/>
            <NavBlock/>
            <Recipe
                src={"Recipes-img/cinnamon.jpg"}
                title={"Bananas Foster Ice Cream Cake"}
                recipe={"ARRANGE 8 to 9 ice cream sandwiches in 9-inch square pan, cutting to form an even layer.\n" +
                "                        Spread with half of whipped topping.\n" +
                "                        Break or crush chocolate wafers and sprinkle over the whipped cream."}/>
            <Footer/>
        </>
    );
};

export default PieRecipe;