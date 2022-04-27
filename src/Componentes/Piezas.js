import FondoPiezas from "../Imagenes/fondo-piezas.webp"
import { ItemList } from "./ItemList"
import { ItemListConteiner } from "./ItemListConteiner"
export const Piezas=()=>{
    return(
        <div className="ContenedorPromos">
            <div className="contenedor-fondo">
                <img className="fondo-promo" src={FondoPiezas}></img>
            </div>
            <div className="contenedor-titulo">
                <h3>Nuestras piezas</h3>
            </div>
            <ItemListConteiner></ItemListConteiner>
        </div>
    )
}