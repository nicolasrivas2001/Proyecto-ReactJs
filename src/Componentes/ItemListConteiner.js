import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import db from "../services/firebase"
import { ItemList } from "./ItemList"
import { Loader } from "./Loader"
import {CartContext} from "./Context" 

export const ItemListConteiner=()=>{
    const {categoryId}=useParams()
    console.log(categoryId)
    const [Items,setItems]=useState([])
    // const [prodFiltrados,setprodFiltrados]=useState([])
    const[load,setLoad]=useState(true)
    const {prodFilt,setProdFilt}=useContext(CartContext);
    const getData=async()=>{
        try {
            const ItemsCollection=collection(db,"Items")
            const col=await getDocs(ItemsCollection)
            const result=col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
            setItems(result)
            console.log(result)
            categoryId? setProdFilt(Items.filter(e=>e.categoria===categoryId)):setProdFilt(Items)
            setLoad(false)
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        getData();
    },[categoryId])

        
        return(
            <>
            {load?<Loader></Loader>:
            <ItemList></ItemList>
            }
            </>
        )   
}