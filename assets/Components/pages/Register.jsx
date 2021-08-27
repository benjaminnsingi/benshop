import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"


const Register = () => {

    const [userRegistration, setUserRegistration] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        firstnameError: '',
        lastnameError: '',
        emailError: '',
        passwordError: '',
        password2Error: '',
        successMessage: ''
    });

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name, value);

        setUserRegistration({ ... userRegistration, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
           <div>
                <div className="container">
                    <div className="login-form">
                        <form action="" onSubmit={handleSubmit}>
                            <h1>Inscrivez-vous</h1>
                            <p>
                                Veuillez remplir ce formulaire pour créer un compte. Ou  <Link to="/Login">Connectez-vous</Link>
                            </p>

                            <label htmlFor="lastname">Nom</label>
                            <input type="text" placeholder="Nom" name="lastname" id="lastname"
                                   value={userRegistration.lastname}
                                   onChange={handleInput}
                            />

                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" placeholder="Prénom" name="firstname" id="firstname"
                                   value={userRegistration.firstname}
                                   onChange={handleInput}
                            />

                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="E-mail" name="email" id="email"
                                   value={userRegistration.email}
                                   onChange={handleInput}
                            />

                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" placeholder="Mot de passe" name="password" id="password"
                                   value={userRegistration.password}
                                   onChange={handleInput}
                            />

                            <label htmlFor="password-repeat">Répétez votre mot de passe</label>
                            <input type="password" placeholder="Répétez votre mot de passe" name="password2"
                                   id="password2"
                                   value={userRegistration.password2}
                                   onChange={handleInput}
                            />

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