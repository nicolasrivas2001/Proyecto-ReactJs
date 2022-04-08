import { ItemListCategoria } from "./ItemListPiezas"
import Fondo from "../Imagenes/fondo-promos.webp"

export const PokeSalads=()=>{
    return(
        <div className="ContenedorPromos">
        <div className="contenedor-fondo">
        <img className="fondo-promo" src={Fondo}></img>
        </div>
        <div className="contenedor-titulo">
            <h3>Our  Poke  Salads</h3>
        </div>
        <ItemListCategoria categoria="poke salads"></ItemListCategoria>
        </div>
    )
}