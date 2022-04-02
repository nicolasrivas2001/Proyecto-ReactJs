import React from "react"
import Logo from "../Imagenes/logo-sushi.png"
import {CartWidget} from "./CartWidget.js"
import { Link } from "react-router-dom"

export const NavBar=()=>{
    return(
        <header>
            <div className="contenedor-logo">
                <Link to="/"><img id="img-logo" src={Logo} alt="logo"/></Link>
            </div>
            <ul>
                <Link to="/">Inicio</Link>
                <Link to="/promos">Promos</Link>
                <Link to="/piezas">Piezas</Link>
                <li>Poke Salads</li>
            </ul>
            <CartWidget></CartWidget>
        </header>
    )
}