import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import db from "../services/firebase"
import { BotonDetail } from "./BotonDetail"
import {CartContext} from "./Context" 


export const ItemList=(props)=>{
    const {Items,setItems}=useContext(CartContext)
    const getData=async()=>{
        try {
            const ItemsCollection=collection(db,"Items")
            const col=await getDocs(ItemsCollection)
            const result=col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
            setItems(result.filter(e=>e.categoria===props.categoria))
            console.log(result)
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    

    return(
        Items.length>0?
        Items.map((i)=>{
        return(
            
                <div className="Promos">
                <div className="producto">
                    <div>
                        <img src={i.imagen}></img>
                    </div>
                    <div className="nombre"><p>{i.nombre}</p></div>
                    {i.cantidad>0?<div className="piezas"><p>{i.cantidad+" piezas"}</p></div>:<div></div>}
                    <div className="precio"><p>{`$`+i.precio}</p></div>
                    <Link to="/detalle">
                        <div className="contenedor-ver-mas">
                            <BotonDetail item={i}></BotonDetail>
                        </div>
                    </Link>
                    
                </div>
                </div>
        )
    })
    :
    <p>Cargando...</p>
    )
    
}