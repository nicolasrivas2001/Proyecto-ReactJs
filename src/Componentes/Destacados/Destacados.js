import { Producto } from "../Productos"
import PokeSalad from "./Imagenes-destacados/poke-salmon.webp"
import Alaska from "./Imagenes-destacados/Alaska.webp"
import Bilbao from "./Imagenes-destacados/Bilbao.webp"
import Tokyo from "./Imagenes-destacados/Tokyo.webp"
export const Destacados=()=>{
    return(
        <div className="ContenedorPromos">
            <div className="Promos">
                <Producto className="Promo" nombre="Poke Win" imagen={Tokyo} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Win" imagen={Alaska} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Salad" imagen={Alaska} precio={499}></Producto>
            </div>
            <div className="Promos">
                <Producto className="Promo" nombre="Poke Win" imagen={Alaska} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Salad" imagen={Alaska} precio={499}></Producto>
                <Producto className="Promo" nombre="Poke Salad" imagen={Alaska} precio={499}></Producto>
            </div>
        </div>
    )
}