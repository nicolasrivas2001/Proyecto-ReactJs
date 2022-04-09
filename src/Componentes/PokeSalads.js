import { ItemList } from "./ItemList"
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
        <ItemList categoria="poke salads"></ItemList>
        </div>
    )
}