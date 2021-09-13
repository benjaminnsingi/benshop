import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BrowserRouter as Router} from "react-router-dom";


function Home() {
    return (
       <Router>
           <Header/>
           <div>
               <h1>Hello guys</h1>
           </div>
           <Footer/>
       </Router>
    )
}

export default Home;