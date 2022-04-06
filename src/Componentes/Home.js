import Fondo from "../Imagenes/fondo-home.webp";
import { Carrito } from "./Carrito";
import { ItemListConteiner } from "./ItemListConteiner";


export const Home=()=>{
    return(
        <>
        <img className="fondo-home" src={Fondo}></img>
        <ItemListConteiner categoria="destacados"></ItemListConteiner>
        <Carrito></Carrito>
        </>
    )
}