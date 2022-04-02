import { useContext, useState } from "react"
import {CartContext} from "./Context" 

export const CountCarrito=()=>{
    const {cantProd,setCantProd}=useContext(CartContext);
    const [count,setCount]=useState(1);
    const Incrementar=(count)=>{
        setCantProd(count+1)
    }
    const Decrementar=(count)=>{
        if (count>0){
            setCantProd(count-1)
        }
    }
    return(
        <div className="cantidad">
                <div onClick={()=>Incrementar(count)}>+</div>
                <div>{count}</div>
                <div onClick={()=>Decrementar(count)}>-</div>
        </div>
    )

}