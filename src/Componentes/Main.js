import Fondo from "../Imagenes/fondo-home.webp";

export const Main=()=>{
    return(
    <main>
        <div className="ContenedorPromos">
            <div className="contenedor-fondo">
                <img className="fondo-home" src={Fondo}></img>  
            </div>
            <div className="contenedor-titulo">
                <h3>Sushi Coder!</h3>
            </div>
        </div>
    </main>
    )
}