import PokeSalad from "./Imagenes/poke-salmon.webp"
import Alaska from "./Imagenes/alaska.png"
import Cooked from "./Imagenes/cooked.png"
import Black from "./Imagenes/black.png"
import Bilbao from "./Imagenes/bilbao.jpg"
import Tokyo from "./Imagenes/tokyo.jpg"
import { Producto } from "../Productos"
import FondoPromos from "./Imagenes/fondo-promos.webp"


export const Promos=()=>{
    return(
        <div className="ContenedorPromos">
            <div className="contenedor-fondo">
                <img className="fondo-promo" src={FondoPromos}></img>
            </div>
            <h2>Promos Imperdibles</h2>
            <div className="Promos">
                <Producto className="Promo" nombre="Poke Salad" imagen={Tokyo} precio={499}></Producto>
                <Producto className="Promo" nombre="Kiri" imagen={Alaska} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Salad" imagen={Cooked} precio={499}></Producto>
            </div>
            <div className="Promos">
                <Producto className="Promo" nombre="Poke Salad" imagen={Black} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Salad" imagen={Bilbao} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Salad" imagen={PokeSalad} precio={499}></Producto>
            </div>
        </div>
    )
}

