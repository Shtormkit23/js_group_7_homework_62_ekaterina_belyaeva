import React from 'react';
import './App.css';
import Home from "./container/Home/Home";
import Recipes from "./container/Recipes/Recipes";
import Menu from "./container/Menu/Menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PieRecipe from "./container/GetItRecipe/GetItRecipe";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/recipes" component={Recipes}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/pierecipe" component={PieRecipe}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
