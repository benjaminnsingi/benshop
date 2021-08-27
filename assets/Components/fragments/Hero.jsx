import React from "react";
import "../scss/Hero.scss";

function Hero() {

    return(
        <section className="section category">
            <div className="cat-center">
                <div className="cat">
                    <img src="images/cat3.jpg" alt="" />
                    <div>
                        <p>FEMMES</p>
                    </div>
                </div>

                <div className="cat">
                    <img src="images/cat2.jpg" alt="" />
                    <div>
                        <p>ACCESSOIRES</p>
                    </div>
                </div>

                <div className="cat">
                    <img src="images/cat1.jpg" alt="" />
                    <div>
                        <p>HOMMES</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
