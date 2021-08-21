// @ts-ignore
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import "./app.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Footer from "./Components/Footer";


function App() {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}>
                        <Home />
                    </Route>
                    <Route path="/login" component={Login}>
                        <Login />
                    </Route>
                    <Route path="/register" component={Register}>
                        <Register />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
