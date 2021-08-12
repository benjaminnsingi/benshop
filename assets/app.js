import React from "react";
import ReactDom from "react-dom";
import Header from "./Components/Header";
import "./app.scss";



ReactDom.render(
    <React.StrictMode>
        <Header/>
    </React.StrictMode>,
    document.getElementById("root")
)

