import Carrito from "../Imagenes/carrito-sushi.jpg";
import { MostrarCarrito } from "./MostrarCarrito";

export const CartWidget = ()=>{
    return(
        <div class="contenedor-carrito">
            <button /*class="btn btn-primary"*/class="btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><img src={Carrito}></img></button>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Tu pedido</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <MostrarCarrito className="carrito-dropdown"></MostrarCarrito>
  </div>
</div>
        </div>
    )
}

