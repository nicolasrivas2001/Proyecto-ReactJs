import { useContext } from "react";
import { CartContext } from "./Context";

export const Item=(props)=>{
    const {setDetailImagen,setDetailNombre,setDetailPrecio,setDetailDescripcion}=useContext(CartContext);

    const datosDetail=()=>{
        const imagen=props.item.imagen;
        const nombre=props.item.nombre;
        const precio=props.item.precio;
        const descripcion=props.item.descripcion;
        setDetailImagen(imagen);
        setDetailNombre(nombre);
        setDetailPrecio(precio);
        setDetailDescripcion(descripcion);
    }

    return(
        <div className="ver-mas" onClick={datosDetail}>Ver más</div>
    )
}