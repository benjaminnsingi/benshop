import React from "react";
import Hero from "../Hero";
import Section from "../Section";
import Product from "../Product";
import Promo from "../Promo";
import Featured from "../Featured";
import Contact from "../Contact";


function Home() {
    return (
        <div>
            <Section/>
            <Hero/>
            <Product/>
            <Promo />
            <Featured />
            <Contact />
        </div>
    )
}

export default Home;