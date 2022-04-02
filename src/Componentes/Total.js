import { useContext } from "react"
import { CartContext } from "./Context"

export const Total=()=>{
    const {total}=useContext(CartContext)
    console.log(total)
    return(
        <>
            <hr></hr>
            <div className="total"><p>Total:</p> <p>$ {total}</p></div>
            <div className="finalizar-compra"><p>Finalizar Compra</p></div>
        </>
        
    )
}