import { useContext } from "react";
import { CartContext } from "./Context";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import db from "../services/firebase";
import { async } from "@firebase/util";




export const Form=()=>{
    const {cartItems,setcartItems,total,setCount}=useContext(CartContext);
    const sendOrder= async(e)=>{
        console.log(e)
        e.preventDefault();
        if(cartItems.length===0){
            alert("No se agrego ningun producto al carrito")
        }else{
            console.log(e.target[0].value)
            let order = {
            comprador:{
                nombre:e.target[0].value,
                apellido:e.target[1].value,
                dni:e.target[2].value,
                direccion:e.target[3].value,
                localidad:e.target[4].value,
                telefono:e.target[5].value,
                email:e.target[6].value,
                date:Timestamp.fromDate(new Date())
            },
            items:cartItems,
            totalOrder:total,
        }
        const queryColecction=collection(db,"orders");
        console.log(order);
        const docRef= await addDoc(queryColecction,order);
        }
        setCount(0);
        setcartItems([]);

    }
    return(
        <div className="contenedor-form">
            <form onSubmit={sendOrder}>
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
                    <button  type="submit" class="btn btn-primary">Finalizar Compra</button>
                    </div>
        </form>
        </div>
    )
}