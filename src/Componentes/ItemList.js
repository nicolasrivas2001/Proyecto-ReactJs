import { useContext } from "react";
import {CartContext} from "./Context" 


export const ItemList=()=>{
    const {prodFilt}=useContext(CartContext);
    console.log(prodFilt)
    return(
        prodFilt.length>0?
        prodFilt.map((i)=>{
        return(
            <div className="producto">
                <div>
                    <img src={i.imagen}></img>
                </div>
                <div className="nombre"><p>{i.nombre}</p></div>
                <div className="precio"><p>{i.precio}</p></div>
            </div>
        )
    })
    :
    <p>Cargando...</p>
    )
}