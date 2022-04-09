import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import db from "../services/firebase"
import { BotonDetail } from "./BotonDetail"
import {CartContext} from "./Context" 


export const ItemListCategoria=(props)=>{
    const {ItemsPiezas,setItemsPiezas}=useContext(CartContext)
    const getData=async()=>{
        try {
            const ItemsCollection=collection(db,"Items")
            const col=await getDocs(ItemsCollection)
            const result=col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
            setItemsPiezas(result.filter(e=>e.categoria===props.categoria))
            console.log(result)
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    

    return(
        ItemsPiezas.length>0?
        ItemsPiezas.map((i)=>{
        return(
            
                <div className="Promos">
                <div className="producto">
                    <div>
                        <img src={i.imagen}></img>
                    </div>
                    <div className="nombre"><p>{i.nombre}</p></div>
                    <div className="piezas"><p>5 piezas</p></div>
                    <div className="precio"><p>{`$`+i.precio}</p></div>
                    
                    <Link to="/detalle">
                        {/* <div className="contenedor-ver-mas">
                            <div className="ver-mas" onClick={datosDetail(i.imagen,i.nombre,i.precio)}>Verr más</div>
                        </div> */}
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