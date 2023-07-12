
import { useState,useEffect, useContext } from "react";
import CartContext from "./cartContext";
import axios from "axios";
import AuthContext from "./authContext";

const CartContextProvider=(props) =>{

    const authCtx=useContext(AuthContext);

    const [cartItems,setCartItems]=useState(props.albumDetails);

    const addUserCartItem= async (emailId,updatedCartItems) =>{
        try{ 
           await axios.patch(`https://ecommerce-generics-default-rtdb.firebaseio.com/cart${emailId}.json`,{
                updatedCartItems: updatedCartItems
             }); 
         } catch(error){
           console.log(error);
         }
       }
     
       // useEffect hook for post request to Firebase
       useEffect(() =>{
        addUserCartItem();
       },[addUserCartItem])

    const addItemHandler=(item,Qty) =>{
        const updatedCartItems=cartItems.map((element) =>{
            if(element.title===item.title){
                element.qty=element.qty+Qty;
            }
            return element;
        })
        setCartItems(updatedCartItems);
        const emailId=localStorage.getItem("emailId");
        const emailId1=emailId.replace('@',"");
        const updatedEmailId=emailId1.replace('.',"");
        addUserCartItem(updatedEmailId,updatedCartItems);
    }

    const removeUserCartItem= async (emailId,updatedCartItems) =>{
        try{ 
           await axios.patch(`https://ecommerce-generics-default-rtdb.firebaseio.com/cart${emailId}.json`,{
                updatedCartItems: updatedCartItems
             }); 
         } catch(error){
           console.log(error);
         }
       }
     
       // useEffect hook for post request to Firebase
       useEffect(() =>{
        removeUserCartItem();
       },[removeUserCartItem])

    const removeItemHandler=(item) =>{
        const updatedCartItems=cartItems.map((element) =>{
            if(element.title===item.title){
                element.qty=element.qty-element.qty;
            }
            return element;
        })
        setCartItems(updatedCartItems);
        if(localStorage.getItem("token")!=null){
            const emailId=localStorage.getItem("emailId");
            const emailId1=emailId.replace('@',"");
            const updatedEmailId=emailId1.replace('.',"");
            removeUserCartItem( updatedEmailId,updatedCartItems);
        }
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