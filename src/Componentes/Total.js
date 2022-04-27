import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./Context"

export const Total=()=>{
    const {total}=useContext(CartContext)
    return(
        <div className="contenedor-total">
            <hr></hr>
            <div className="total">
                <p>Total:</p> <p>$ {total}</p>
            </div>
            <div className="pagar">
                <Link to="/formulario"><p>Ir a pagar</p></Link>
            </div>
        </div>
        
    )
}