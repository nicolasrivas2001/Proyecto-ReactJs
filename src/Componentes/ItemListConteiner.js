import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import db from "../services/firebase"
import { ItemList } from "./ItemList"
import { Loader } from "./Loader"
import {CartContext} from "./Context" 
import { Count } from "./Count"

export const ItemListConteiner=(props)=>{
    const {categoryId}=useParams()
     
    const [Items,setItems]=useState([])
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
    });

        
        return(
            <>
            <div className="ContenedorPromos">
            <ItemList></ItemList>
            </div>
            </>
        )  

}