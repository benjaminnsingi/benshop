import React from "react";
import { Link} from "react-router-dom";
import "../scss/footer.scss";


const Login = () => {

    return(
       <div className="container">
           <div className="login-form">
               <form action="">
                   <h1>Connexion</h1>
                   <p>
                       Vous avez déjà un compte ? Connectez-vous ou  <Link to="/Register">Inscrivez-vous</Link>
                   </p>

                   <label htmlFor="email">Email</label>
                   <input type="text" placeholder="E-mail" name="email"/>

                   <label htmlFor="password">Mot de passe</label>
                   <input type="password" placeholder="Mot de passe" name="password"/>

                   <p>
                       <Link to="">Mot de passe oublié</Link>
                   </p>

                   <div className="buttons">
                       <button type="submit" className="signupbtn">Se connecter</button>
                   </div>
               </form>
           </div>
       </div>
    )
}

export default Login;