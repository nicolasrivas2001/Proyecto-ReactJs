import Fondo from "../Imagenes/fondo-home.webp";
import { Carrito } from "./Carrito";
import {Destacados} from "./Destacados/Destacados";
import { DestacadosPrueba } from "./DestacadosPrueba";
import { ItemList } from "./ItemList";
import { ItemListConteiner } from "./ItemListConteiner";


export const Home=()=>{
    return(
        <>
        <img className="fondo-home" src={Fondo}></img>
        <ItemListConteiner></ItemListConteiner>
        <Carrito></Carrito>
        </>
    )
}