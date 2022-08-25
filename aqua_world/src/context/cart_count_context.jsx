import { createContext, useState } from "react";
export const CartCountContext = createContext();

const  CartCountContextProvider = ({children})=>{
    const [cartcount, setCartcount]= useState(0)
    const updateCartCount = (v)=>{
        setCartcount(v);

    } 

    return(
        <CartCountContext.Provider value={{cartcount, updateCartCount}}>{children}</CartCountContext.Provider>
    )
}

export{CartCountContextProvider}