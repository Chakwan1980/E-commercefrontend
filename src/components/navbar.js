import React  from 'react' ;
import {Link} from "react-router-dom";
import '../styles/navbar.css';
import logo from '../fotos/logo.png';

function Navbar (){
    return (
         <div className='container-1'>
         <div className=''><img className = "logo" src= {logo} alt="logo" width={50}/></div>
         <div className=''></div>
         <div className=''></div>
         <div className=''></div>
         


         </div>
    )

}

export default Navbar;