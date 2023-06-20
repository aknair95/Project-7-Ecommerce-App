
import HeadingBar from "../components/heading";
import Album from "../components/albumTile";
import { Button } from "react-bootstrap";
import Cart from "../components/cart/cart";
import CartContextProvider from "../store/cartContextProvider";
import Footer from "../components/footer";

const Store=(props) =>{
    props.setStorePage(true);

    return(
    <CartContextProvider albumDetails={props.albumDetails}>
      <Cart cartShow={props.cartShow} cartHide={props.hideCart}/>
      <hr className="p-4"/>
      <HeadingBar/>
      <Album albumDetails1={props.albumDetails[0]} albumDetails2={props.albumDetails[1]}/>
      <Album albumDetails1={props.albumDetails[2]} albumDetails2={props.albumDetails[3]}/>
      <Button onClick={props.showCart} className="mt-4" style={{marginLeft:"780px",width:"150px",
        height:"60px",fontWeight:"bold",backgroundColor:"orange"}}>  
        VIEW CART
      </Button><br/><br/>
      <Footer/>
    </CartContextProvider>
    )
}

export default Store;