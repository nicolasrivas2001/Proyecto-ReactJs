import { ItemListCategoria } from "./ItemListPiezas"
import Fondo from "../Imagenes/fondo-promos.webp"

export const PokeSalads=()=>{
    return(
        <div className="ContenedorPromos">
        <div className="contenedor-fondo">
        <img className="fondo-promo" src={Fondo}></img>
        </div>
        <h3>Our  Poke  Salads</h3>
        <ItemListCategoria categoria="poke salads"></ItemListCategoria>
        </div>
    )
}