import React from "react";
const CartContext=React.createContext({
    cartItems:[],
    addItem: ()=>{},
    removeItem: ()=>{}
})

export default CartContext;