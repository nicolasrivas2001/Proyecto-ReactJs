import { useContext } from "react";
import { CartContext } from "./Context";


export const Borrar=(props)=>{
    const {setCartItems,cartItems,setTotal,setCount}=useContext(CartContext);
    const borrarItem=()=>{
        const cartItemsActualizado=cartItems.filter(e=>e.nombre!==props.item.nombre)
        console.log(cartItemsActualizado)
        setCartItems(cartItemsActualizado);
        setTotal((prev)=>prev-props.item.precio*props.item.cantidad)
        setCount((prev)=>prev-props.item.cantidad)
    }
    return(
        <div className="borrar" onClick={borrarItem}>X</div>
    )
}