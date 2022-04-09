import ImgLogo from "../Imagenes/img-carrito-nuevo.webp"

export const Footer=()=>{
    return(
        <div className="Footer">
        <div className="contenedor-sushi">
            <img src={ImgLogo}></img>
        </div>
        <div>
            <ul>
                <h3>Menú</h3>
                <li>Inicio</li>
                <li>Promos</li>
                <li>Piezas</li>
            </ul>
        </div>
        <div>
            <h3>Contacto</h3>
            <p>+54 1145658798</p>
        </div>
    </div>
    )
}