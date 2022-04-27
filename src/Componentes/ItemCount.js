import { useContext, useState } from "react"
import {CartContext} from "./Context" 

export const ItemCount=(props)=>{
    const {addItem}=useContext(CartContext);
    const [count,setCount]=useState(1);
    const Incrementar=(count)=>{
        setCount(count+1)
    }
    const Decrementar=(count)=>{
        if (count>0){
            setCount(count-1)
        }
    }
    let precio = parseInt(props.precio);
    
    return(
        <div className="agregar-carrito">
            <div className="cantidad">
                <div onClick={()=>Decrementar(count)}>-</div>
                <div className="count">{count}</div>
                <div onClick={()=>Incrementar(count)}>+</div>
            </div>
            <div className="contenedor-agregar-carrito">
                <div className="boton-agregar-carrito" onClick={()=>addItem(count,{imagen:props.imagen,nombre:props.nombre,precio:props.precio,cantidad:count},precio*count)}>Agregar al Carrito</div>
            </div>
        </div>
    )
}

