import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import db from "../services/firebase"

import {CartContext} from "./Context" 
import { Item } from "./Item"


export const ItemList=(props)=>{
    return(
        <div className="producto">
            <div>
                <img src={props.datos.imagen}></img>
            </div>
            <div className="nombre"><p>{props.datos.nombre}</p></div>
            <div className="descripcion"><p>{props.datos.descripcion}</p></div>
            {props.datos.cantidad>0?<div className="piezas"><p>{props.datos.cantidad+" piezas"}</p></div>:<div></div>}
            <div className="contenedor-precio">
                <div className="precio"><p>{`$`+props.datos.precio}</p></div>
            </div>
            <Link to={`/item/${props.datos.nombre}`}>
                <div className="contenedor-ver-mas">
                    <Item item={props.datos}></Item>
                </div>
            </Link>      
        </div>
    )
}