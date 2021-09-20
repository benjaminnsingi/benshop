import React from "react";
import { Route, Switch} from "react-router-dom";
import Product from "../pages/Product";
import Home from "../pages/Home";

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact  component={Home} />
            <Route path='/products' component={Product} />
        </Switch>
    )
}

export default Routes;