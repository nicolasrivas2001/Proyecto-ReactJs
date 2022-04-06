import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import db from "../services/firebase"
import { ItemList } from "./ItemList"
import {CartContext} from "./Context" 

export const ItemListConteiner=()=>{
    const [Items,setItems]=useState([])
    const {setProdFilt}=useContext(CartContext);
    const getData=async()=>{
        try {
            const ItemsCollection=collection(db,"Items")
            const col=await getDocs(ItemsCollection)
            const result=col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
            setItems(result)
            setProdFilt(Items.filter(e=>e.categoria==="destacados"))
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