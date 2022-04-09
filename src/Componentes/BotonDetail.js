import { useContext } from "react";
import { CartContext } from "./Context";


export const BotonDetail=(props)=>{
    console.log(props.item.nombre)
    const {setDetailImagen,setDetailNombre,setDetailPrecio,enviarAdetail}=useContext(CartContext);
    

    const datosDetail=()=>{
        const imagen=props.item.imagen;
        const nombre=props.item.nombre;
        const precio=props.item.precio;
        setDetailImagen(imagen);
        setDetailNombre(nombre);
        setDetailPrecio(precio);
    }

    return(
        <div className="ver-mas" onClick={datosDetail}>Ver más</div>
    )
}