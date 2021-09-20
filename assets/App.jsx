import React from "react";
import "./app.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import {BrowserRouter as  Router} from "react-router-dom";
import Routes from "./routes/Routes";


function App() {
    return (
        <Router>
            <Header/>
            <Routes/>
        </Router>
    )
}

export default App;
