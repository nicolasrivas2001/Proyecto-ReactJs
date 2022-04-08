import { useContext } from "react";
import { CartContext } from "./Context";


export const BotonDetail=(props)=>{
    console.log(props.item.nombre)
    const {setDetailImagen,setDetailNombre,setDetailPrecio,enviarAdetail}=useContext(CartContext);
    const datosDetail=(imagen,nombre,precio)=>{
        setDetailImagen(imagen);
        setDetailNombre(nombre);
        setDetailPrecio(precio);
    }

    return(
        <div className="ver-mas" onClick={datosDetail(props.item.imagen,props.item.nombre,props.item.precio)}>Verr más</div>
    )
}