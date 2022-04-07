import React from "react"
import Logo from "../Imagenes/img-carrito-nuevo.webp"
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
                <Link to="/piezas">Piezas</Link>
                <Link to="/poke-salads">Poke Salads</Link>
            </ul>
            <CartWidget></CartWidget>
        </header>
    )
}