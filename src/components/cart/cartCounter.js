import { Fragment, useContext } from "react";
import CartContext from "../../store/cartContext";

const CartCounter=() =>{
    const cartCtx=useContext(CartContext);
    const totalCartQty=cartCtx.cartItems.reduce((count,element) =>{
        return count+element.qty;
    },0);
    
    return(
        <Fragment>
            <h5 style={{color:"blue",marginLeft:"5px"}}>{totalCartQty}</h5>
        </Fragment>
    )
}

export default CartCounter;