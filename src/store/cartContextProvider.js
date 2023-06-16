
import { useState } from "react";
import CartContext from "./cartContext";

const CartContextProvider=(props) =>{
    const [cartItems,setCartItems]=useState(props.albumDetails);

    const addItemHandler=(item,Qty) =>{
        const updatedCartItems=cartItems.map((element) =>{
            if(element.title===item.title){
                element.qty=element.qty+Qty;
            }
            return element;
        })
        setCartItems(updatedCartItems);
    }

    const removeItemHandler=(item) =>{
        const updatedCartItems=cartItems.map((element) =>{
            if(element.title===item.title){
                element.qty=element.qty-element.qty;
            }
            return element;
        })
        setCartItems(updatedCartItems);
    }

    const cartContext={
        cartItems: cartItems,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;