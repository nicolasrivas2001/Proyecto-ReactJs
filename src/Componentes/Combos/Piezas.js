import { Producto } from "../Productos"
import FondoPiezas from "./Imagenes/fondo-piezas.webp"
import Bologna from "./Imagenes/bologna.jpg"
import Firenze from "./Imagenes/firenze.jpg"
import Geishas from "./Imagenes/geishas-salmon.jpg"
import NewYorkPhila from "./Imagenes/newyork-philladelphia.jpg"
import Nigiri from "./Imagenes/nigiri-salmon.jpg"
import RollNewYork from "./Imagenes/roll-newyork.jpg"
import { ItemListConteiner } from "../ItemListConteiner"
export const Piezas=()=>{
    return(
        <div className="ContenedorPromos">
        <div className="contenedor-fondo">
        <img className="fondo-promo" src={FondoPiezas}></img>
        </div>
        <h3>Nuestras piezas</h3>
        <ItemListConteiner></ItemListConteiner>
        {/* <div className="Promos">
        <Producto nombre="Poke Salad" imagen={Bologna} precio={450}></Producto>
            <Producto nombre="Alaska 40" imagen={Firenze} precio={500}></Producto>
            <Producto nombre="Bilbao 25" imagen={Geishas} precio={500}></Producto>
        </div>
        <div className="Promos">
            <Producto nombre="Tokyo 40" imagen={NewYorkPhila} precio={590}></Producto>
            <Producto nombre="Tokyo 40" imagen={Nigiri} precio={490}></Producto>
            <Producto nombre="Tokyo 40" imagen={RollNewYork} precio={520}></Producto>
        </div> */}
        </div>
    )
}