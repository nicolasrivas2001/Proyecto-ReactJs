import React , {createContext, useState} from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [prodFilt,setProdFilt]=useState([]);
    const [Items,setItems]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCount]=useState(0);
    const [total,setTotal]=useState(0);

    const [detailImagen,setDetailImagen]=useState("");
    const [detailNombre,setDetailNombre]=useState("");
    const [detailPrecio,setDetailPrecio]=useState("");


    const enviarAdetail=(imagen,nombre,precio)=>{
        setDetailImagen(imagen);
        setDetailNombre(nombre);
        setDetailPrecio(precio);
    }

    const addItem=(amount,item,precio)=>{
         if (cartItems.some((product)=>product.nombre===item.nombre)){
             const copy=[...cartItems];
             const repeatItemIndex=cartItems.findIndex(
                 (product)=>product.nombre===item.nombre
             );
             copy[repeatItemIndex]={
                 ...copy[repeatItemIndex],
                 cantidad: copy[repeatItemIndex].cantidad+amount,
             };
             setCartItems(copy);
             setCount((prev)=>prev+amount);
         }else{
            setCartItems([...cartItems,{...item,amount}]);
            setCount((prev)=>prev+amount);
         }
        setTotal((prev)=>prev+precio);
    }


   
    
     const eliminarItem=(item)=>{
         const CartItemActualizado=cartItems.filter(e=>e.nombre!==item.nombre)
         setCartItems(CartItemActualizado);
     }
    

    return(
        <CartContext.Provider value={{setProdFilt,prodFilt,cartCount,setCount,cartItems,setCartItems,addItem,total,setTotal,setItems,Items,setDetailImagen,setDetailNombre,setDetailPrecio,enviarAdetail,detailImagen,detailNombre,detailPrecio,eliminarItem}}>{children}</CartContext.Provider>
    )
}