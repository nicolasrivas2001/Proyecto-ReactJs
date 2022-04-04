import { CartContext } from "./Context"
import { useContext } from "react"

export const Form=()=>{
    const {setCartItems,setTotal}=useContext(CartContext);
    const finalizarCompra=()=>{
        alert("Su compra se ha realizado con exito")
        setCartItems([])
        setTotal(0)
    }
    return(
        <div className="contenedor-form">
            <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Apellido</label>
                        <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">DNI</label>
                        <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Dirección</label>
                        <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Localidad/Ciudad</label>
                        <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Teléfono</label>
                        <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    
                    
                    <div className="contenedor-submit">
                    <button onClick={finalizarCompra} type="submit" class="btn btn-primary">Finalizar Compra</button>
                    </div>
        </form>
        </div>
    )
}