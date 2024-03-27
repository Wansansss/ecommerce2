"use client"

import { CartContextProvider } from "@/hooks/useCart";
import React from "react";

interface CartProdversProps{
    children: React.ReactNode
}

const CartProviders:React.FC<CartProdversProps> = ({children}) => {
    return ( 
        <CartContextProvider>{children}</CartContextProvider>
     );
}
 
export default CartProviders;