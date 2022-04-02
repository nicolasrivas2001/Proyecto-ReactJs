import { useContext } from "react"
import { CartContext } from "./Context"


export const Carrito=()=>{
    const {cartCount}=useContext(CartContext)
    return(
        <div className="numero-carrito">
            <div>{cartCount}</div>
        </div>
    )   
}

