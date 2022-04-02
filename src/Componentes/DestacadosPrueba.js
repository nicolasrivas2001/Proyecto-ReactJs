import { ArrayProductos } from "./ArrayProductos";

export const DestacadosPrueba=()=>{
    const i=0;
    while(i<ArrayProductos.length){
        return(
            <div className="ContenedorPromos">
                <div className="Promos">
                {ArrayProductos.map((i)=>{
                    return(
                        <div className="producto">
                            <div>
                                <img src={i.imagen}></img>
                            </div>
                            <div className="nombre"><p>{i.nombre}</p></div>
                            <div className="precio"><p>{i.precio}</p></div>
                        </div>
                    )
                })}
                </div>
            </div>
        )   
    }
}