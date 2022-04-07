import FondoPiezas from "../Imagenes/fondo-piezas.webp"
import { ItemListCategoria } from "./ItemListPiezas"
export const Piezas=()=>{
    return(
        <div className="ContenedorPromos">
        <div className="contenedor-fondo">
            <img className="fondo-promo" src={FondoPiezas}></img>
        </div>
        <h3>Nuestras piezas</h3>
        <ItemListCategoria categoria="piezas"></ItemListCategoria>
        </div>
    )
}