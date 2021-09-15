import React from "react";
import Header from "../components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Section from "../components/Section";
import Product from "../components/Product";
import Special from "../components/Special";
import Selling from "../components/Selling";
import Footer from "../components/Footer";


function Home() {
    return (
       <Router>
           <Header/>
           <Section/>
           <Product/>
           <Special/>
           <Selling/>
           <Footer/>
       </Router>
    )
}

export default Home;