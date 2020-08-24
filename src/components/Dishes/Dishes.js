import React from 'react';
import './Dishes.css';

const Dishes = props => {
    return (
        <div className="dish">
                <div className="dish-img"><img src={props.src} alt={props.alt}/></div>
                <p className="dish-description">{props.description}</p>
        </div>
    );
};

export default Dishes;