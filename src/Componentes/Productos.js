import { Count } from "./Count"

export const Producto=(props)=>{
    const nombre =props.nombre;
    return(
        <>
        <div className="producto">
            <div>
                <img src={props.imagen}></img>
            </div>
            <div className="nombre"><p>{props.nombre}</p></div>
            <div className="precio"><p>{props.precio}</p></div>
            <Count imagen={props.imagen} nombre={props.nombre} precio={props.precio}></Count>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Comprar
            </button>
    
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>{nombre}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

