import React from "react";
import Header from "../components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Section from "../components/Section";
import Cart from "../components/Cart";
import Special from "../components/Special";
import Selling from "../components/Selling";
import Footer from "../components/Footer";
import Routes from "../routes/Routes";


function Home() {
    return (
       <>
           <Section/>>
           <Special/>
           <Selling/>
           <Footer/>
       </>
    )
}

export default Home;