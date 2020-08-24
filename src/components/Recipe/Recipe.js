import React from "react";
import './Recipe.css'

const Recipe = props => {
    return (
        <section className="recipe">
            <div className="recipe-img">
                <img src={props.src} alt="cinnamon"/>
            </div>
            <div className="cinnamon-recipe">
                <p className="cinnamon-recipe-header">
                    {props.title}
                </p>
                <div className="cinnamon-recipe-bar">
                    <div className="cinnamon-clock-icon">
                        <img src="Recipes-img/Clock_Icon_hd.jpg" alt="clock"/>
                    </div>
                    <p className="cinnamon-timing">15 min</p>
                </div>
                <div className="cinnamon-recipe-description">
                    <p className="cinnamon-recipe-instruction">
                        1 (8 ounce) container frozen whipped topping, thawed 20 chocolate round wafers, divided
                        1 (7 1/4 ounce) bottle Smucker's® Hot Dark Chocolate Microwaveable Topping, divided
                    </p>
                    <h4 className="title-desc">Directions</h4>
                    <p className="cinnamon-recipe-direction">{props.recipe}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Recipe;