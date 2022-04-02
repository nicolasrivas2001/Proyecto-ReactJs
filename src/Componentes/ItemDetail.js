import { Count } from "./Count"

export const ItemDetail=(props)=>{
    return(
            <div>
                <div>
                    <img src={props.imagen}></img>
                </div>
                <div className="nombre"><p>{props.nombre}</p></div>
                <div className="precio"><p>{props.precio}</p></div>
                <Count imagen={props.imagen} nombre={props.nombre} precio={props.precio}></Count>
            </div>
        
    )
}

        