import React from "react";
import Hero from "../Hero";
import Section from "../Section";
import Product from "../Product";
import Promo from "../Promo";
import Featured from "../Featured";
import Contact from "../Contact";
import Footer from "../Footer";


function Home() {
    return (
        <div>
            <Section/>
            <Hero/>
            <Product/>
            <Promo />
            <Featured />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;