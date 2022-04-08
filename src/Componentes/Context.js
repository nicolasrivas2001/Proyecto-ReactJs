import React , {createContext, useEffect, useState} from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [prodFilt,setProdFilt]=useState([]);
    const [ItemsPiezas,setItemsPiezas]=useState([]);
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
    //     alert("Hola")
        //  setCartItems(cartItems.filter(product=>product.id !==item))
    //    let i=0;
    //    let existe=false;
    //    while(existe===false && cartItems.length>i){
    //         if(cartItems[i].nombre=prod){
    //             existe=true;
    //             cartItems.splice(cartItems[i],1)
    //         }
    //         i++;
    //    }
        // let index=cartItems.indexOf(prod);
        // if (index>-1){
        //     cartItems.splice(index,1)
        // }
        // let i=0;
        // while(i<cartItems.length){
        //     if(cartItems[i].nombre){
        //         cartItems[i].splice(cartItems[i],1)
        //     }
        //     i++;
        // }
     }
    

    return(
        <CartContext.Provider value={{setProdFilt,prodFilt,cartCount,setCount,cartItems,setCartItems,addItem,total,setTotal,setItemsPiezas,ItemsPiezas,setDetailImagen,setDetailNombre,setDetailPrecio,enviarAdetail,detailImagen,detailNombre,detailPrecio,eliminarItem}}>{children}</CartContext.Provider>
    )
}