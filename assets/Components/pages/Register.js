import React from "react";
import { Link } from "react-router-dom";


const Register = () => {

    return (
           <div>
                <div className="container">
                    <div className="login-form">
                        <form action="">
                            <h1>Inscrivez-vous</h1>
                            <p>
                                Veuillez remplir ce formulaire pour créer un compte. Ou  <Link to="/Login">Connectez-vous</Link>
                            </p>

                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="E-mail" name="email"/>

                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" placeholder="Mot de passe" name="password"/>

                            <label htmlFor="password-repeat">Répétez votre mot de passe</label>
                            <input type="password" placeholder="Répétez votre mot de passe" name="password"/>

                            <div className="buttons">
                                <button type="submit" className="signupbtn">S'inscrire</button>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
    )
}

export default Register;