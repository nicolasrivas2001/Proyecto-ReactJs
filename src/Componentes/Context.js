import React , {createContext, useState} from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [prodFilt,setProdFilt]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCount]=useState(0);
    const [cantProd,setCantProd]=useState(0);
    const [total,setTotal]=useState(0);

    const addItem=(amount,item,precio)=>{
        // if (cartItems.some((product)=>product.id===item.id)){
        //     const copy=[...cartItems];
        //     const repeatItemIndex=cartItems.findIndex(
        //         (product)=>product.id===item.id
        //     );
        //     copy[repeatItemIndex]={
        //         ...copy[repeatItemIndex],
        //         amount: copy[repeatItemIndex].amount+amount,
        //     };
        //     setCartItems(copy);
        //     setCount((prev)=>prev+amount);
        // }else{
            
        // }
        setCartItems([...cartItems,{...item,amount}]);
        setCount(item.cantidad);
        setTotal((prev)=>prev+precio);
    }

    const eliminarItem=(prod)=>{
    //    let i=0;
    //    let existe=false;
    //    while(existe===false && cartItems.length>i){
    //         if(cartItems[i].nombre=prod){
    //             existe=true;
    //             cartItems.splice(cartItems[i],1)
    //         }
    //         i++;
    //    }
        let index=cartItems.indexOf(prod);
        if (index>-1){
            cartItems.splice(index,1)
        }
        // while(i<cartItems.length){
        //     if(cartItems[i].nombre){
        //         cartItems[i].splice()
        //     }
        //     i++;
        // }
    }
    

    return(
        <CartContext.Provider value={{setProdFilt,prodFilt,cartCount,setCount,cartItems,setCartItems,addItem,cantProd,total,eliminarItem}}>{children}</CartContext.Provider>
    )
}