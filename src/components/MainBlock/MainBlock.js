import React from 'react';
import './MainBlock.css'
import Dishes from "../Dishes/Dishes";

const MainBlock = props => {
    return (
        <>
            <section className="bananas">
                <div className="bananas-logo">
                    <img src="Recipes-img/logo2.png" alt="logo"/>
                </div>
                <h2 className="bananas-header">Bananas Foster Ice Cream Cake</h2>
                <p className="bananas-description">
                    If you're looking for decadence,
                    look no further — you've found the Holy Grail of desserts.
                    Honestly,this cake makes us wonder why Bananas Foster hasn't always been served
                    on top of ice cream cake.</p>
                <a href="/pierecipe" className="bananas-button">Get it recipe</a>
                <img src="Recipes-img/bg-1.png" className="bg-img" alt="bg-img"/>
            </section>
            <section className="dishes">
            <div className="dishes-wrapper">
                <Dishes
                    src="Recipes-img//img-1.png"
                    alt="img"
                    description="Raspberry & Cream Frozen Yogurt Pie"
                />
                <Dishes
                    src="Recipes-img//img-2.png"
                    alt="img"
                    description="Giant Ice Cream Sandwich"
                />
                <Dishes
                    src="Recipes-img//img-3.png"
                    alt="img"
                    description="Dark Chocolate Crunch Ice Cream Sandwich Cake"
                />
            </div>
            </section>
        </>
    )
};

export default MainBlock;