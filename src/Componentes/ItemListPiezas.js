import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import db from "../services/firebase"
import { ItemList } from "./ItemList"
import { Loader } from "./Loader"
import {CartContext} from "./Context" 
import { Count } from "./Count"
import { ItemDetail } from "./ItemDetail"

export const ItemListCategoria=(props)=>{
    // const {categoryId}=useParams()
    const {ItemsPiezas,setItemsPiezas,setDetailImagen,setDetailNombre,setDetailPrecio,enviarAdetail}=useContext(CartContext);
    // const [prodFiltrados,setprodFiltrados]=useState([])
    // const[load,setLoad]=useState(true)
    // const {prodFilt,setProdFilt}=useContext(CartContext);
    const getDataPiezas=async()=>{
        try {
            const ItemsCollection=collection(db,"Items")
            const col=await getDocs(ItemsCollection)
            const result=col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
            setItemsPiezas(result.filter(e=>e.categoria===props.categoria))
            console.log(result)
            // categoryId? setProdFilt(Items.filter(e=>e.categoria===categoryId)):setProdFilt(Items)
            // setLoad(false)
        } catch (error) {
            console.warn("error",error)
        }
    }

    

    useEffect(()=>{
        getDataPiezas();
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
                    <div className="precio"><p>{`$`+i.precio}</p></div>
                    
                    <Link to="/detalle"><div className="contenedor-ver-mas">
                    <div className="ver-mas" onClick={enviarAdetail(i.imagen,i.nombre,i.precio)}>Ver más</div>
                        </div></Link>
                    
                </div>
                </div>
        )
    })
    :
    <p>Cargando...</p>
    )
    
}