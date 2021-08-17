import React from "react";
import ReactDom from "react-dom";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import "./app.scss";




ReactDom.render(
    <React.StrictMode>
        <Header/>
        <Home/>
    </React.StrictMode>,
    document.getElementById("root")
)

