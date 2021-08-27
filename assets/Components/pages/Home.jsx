import React from "react";
import Hero from "../fragments/Hero";
import Section from "../fragments/Section";
import Product from "../fragments/Product";
import Promo from "../fragments/Promo";
import Featured from "../fragments/Featured";
import Contact from "../fragments/Contact";


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