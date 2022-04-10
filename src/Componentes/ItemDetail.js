import { useContext } from "react";
import { CartContext } from "./Context";
import { Count } from "./Count"

export const ItemDetail=()=>{
    const {detailImagen,detailNombre,detailPrecio,detailDescripcion}=useContext(CartContext);
    return(
            <div className="contenedor-detalle">
                <div className="detalle">
                <div className="imagen">
                    <img src={detailImagen}></img>
                </div>
                <div className="contenedor-datos">
                <div className="nombre">{detailNombre}</div>
                <div className="contenedor-descripcion">
                    <div className="descripcion">{detailDescripcion}</div>
                </div>
                <div className="precio"><p>{`$`+detailPrecio}</p></div>
                <Count imagen={detailImagen} nombre={detailNombre} precio={detailPrecio}></Count>
                </div>
            </div>
            </div>
        
    )
}

        