import React from "react";
import mantel from '../fotos/mantel.png'
import '../styles/home.css'
import Search from '../components/search.js'

function Home (){

    return (

        <div className="imagen-container">
 
        <div > <img className="mantel" src={mantel} alt="mantel" /> </div>
        <Search />
        </div>
      
    )

}

export default Home