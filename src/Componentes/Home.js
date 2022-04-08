import Fondo from "../Imagenes/fondo-home.webp";
import { ItemListCategoria } from "./ItemListPiezas";


export const Home=()=>{
    return(
        <div className="ContenedorPromos">
        <div className="contenedor-fondo">
            <img className="fondo-home" src={Fondo}></img>  
        </div>
        <div className="contenedor-titulo">
            <h3>Our Destacados</h3>
        </div>
        <ItemListCategoria categoria="destacados"></ItemListCategoria>
        </div>
    )
}