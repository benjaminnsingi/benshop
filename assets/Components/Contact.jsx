import React from "react";
import "./scss/contact.scss";

const Contact = () => {

    return (
        <section className="section contact">
            <div className="row">
                <div className="col">
                    <h2>EXCELLENT SUPPORT</h2>
                    <p>Nous aimons nos clients et ils peuvent nous joindre à tout moment de la journée. de la journée, nous sommes à votre service 24/7.</p>
                    <a href="" className="btn btn-1">Contact</a>
                </div>
                <div className="col">
                    <form action="">
                        <div>
                            <input type="email" placeholder="Email Address" />
                            <a href="">Envoyer</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        )
}

export default Contact;