import { useContext } from "react"
import { Borrar } from "./Borrar"
import { CartContext } from "./Context"
import { Total } from "./Total"


export const MostrarCarrito=()=>{
    const {cartItems}=useContext(CartContext)

    return(
        <div className="carrito-dropdown">
            {cartItems.length===0?
            (<p>Carrito Vacio</p>):
            (cartItems.map((i)=>{
                return(
                    <div className="item-carrito">
                        <img className="img" src={i.imagen}></img>
                        <div>
                            <div className="nombre">{i.nombre}</div>
                            <div className="precio">{`$`+i.precio}</div>
                        </div>
                        <div className="cantidad"><p>{i.cantidad}</p></div>
                        <Borrar item={i}></Borrar>
                    </div>
                );
            }
            )
            )
            }
            <Total></Total>
        </div>
        
    )
    
}

