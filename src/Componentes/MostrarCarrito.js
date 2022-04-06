import { useContext, useEffect } from "react"
import { CartContext } from "./Context"
import { Total } from "./Total"


export const MostrarCarrito=()=>{
    // const eliminarItem=(item)=>{
    // const CartItemActualizado=cartItems.filter(e=>e.nombre!==item)
    // setCartItems(CartItemActualizado)
    // }
    const {cartItems,setCartItems}=useContext(CartContext)
    // const eliminar=(item)=>cartItems.filter(product=>product.id !== item.id)
    return(
        <div className="carrito-dropdown">
            {cartItems.length===0?
            (<p>Carrito Vacio</p>):
            (cartItems.map((i)=>{
                const Incrementar=(count)=>{
                    return(count+1)
                }
                const Decrementar=(count)=>{
                    if (count>0){
                        return(count-1)
                    }
                }
                return(
                    <div className="item-carrito">
                        <img className="img" src={i.imagen}></img>
                        <div>
                            <div className="nombre">{i.nombre}</div>
                            <div className="precio">{`$`+i.precio}</div>
                        </div>
                        <div className="cantidad"><p>{i.cantidad}</p></div>
                        <div className="borrar" >X</div>
                        <div>
                            {/* <div onClick={()=>Incrementar(i[3])}>+</div>
                            <div>{count}</div>
                            <div onClick={()=>Decrementar(i[3])}>-</div> */}
                        </div>
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

