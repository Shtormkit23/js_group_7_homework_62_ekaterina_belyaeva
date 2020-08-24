import React from "react";
import './Desserts.css'

const Desserts = props => {
    return (
        <div className="dessert">
            <div className="food-card">
                <img src={props.src} alt="dessert"/>
                <div className="media-body">
                    <div className="card-title">
                        <h4 className="food-card-title">{props.name}</h4>
                        <h3 className="price-tag">${props.order}</h3>
                    </div>
                    <p>Whales and darkness moving form cattle</p>
                </div>
            </div>
        </div>
    );
};

export default Desserts;