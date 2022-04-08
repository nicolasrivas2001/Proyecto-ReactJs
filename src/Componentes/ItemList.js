import { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./Context" 
import {BotonDetail} from "./BotonDetail"

export const ItemList=()=>{
    const {prodFilt,enviarAdetail}=useContext(CartContext);
    return(
        prodFilt.length>0?
        prodFilt.map((i)=>{
        return(
                <div className="Promos">
                <div className="producto">
                    <div>
                        <img src={i.imagen}></img>
                    </div>
                    <div className="nombre"><p>{i.nombre}</p></div>
                    <div className="precio"><p>{`$`+i.precio}</p></div>
                    <Link to="/detalle"><div className="contenedor-ver-mas">
                    {/* <div className="ver-mas" onClick={enviarAdetail(i.imagen,i.nombre,i.precio)}>Ver más</div> */}
                        <BotonDetail item={i}></BotonDetail>
                        </div></Link>
                </div>
                </div>
        )
    })
    :
    <p>Cargando...</p>
    )
}