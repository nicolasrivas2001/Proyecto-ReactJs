import { ItemList } from "./ItemList"
import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import db from "../services/firebase"
import {CartContext} from "./Context" 
import { Item } from "./Item"
import Fondo from "../Imagenes/fondo-home.webp";


export const ItemListConteiner=()=>{
    const {id}=useParams()
    console.log(id)
    const {Items,setItems}=useContext(CartContext)
    const getData=async(idCat)=>{
        try {
            const ItemsCollection=collection(db,"Items")
            const col=await getDocs(ItemsCollection)
            const result=col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
            setItems(result.filter(e=>e.categoria===idCat))
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        if (!id){
            getData("destacados");
        }else{
            getData(id);
        }       
    },[id])

    return(
        Items.length>0?
        Items.map((i)=>{
        return(
            <div className="ContenedorPromos">
                <div className="Promos">
                    <ItemList datos={i} categoria={id}></ItemList>
                </div>
            </div>
        )
    })
    :
    <p>Cargando...</p>
    )
}