import { useState } from "react";
import NavbarTop from "./components/navbar";
import HeadingBar from "./components/heading";
import Album from "./components/albumTile";
import { Button } from "react-bootstrap";
import Cart from "./components/cart/cart";
import CartContextProvider from "./store/cartContextProvider";

const App = () => {
  const albumDetails=[
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      qty:0
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      qty:0
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      qty:0
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      qty:0
    },
  ]

  const [cartShow,setCartShow]=useState(false);

  const showCart=() =>{
    setCartShow(true);
  }

  const hideCart=() =>{
    setCartShow(false);
  }

  return (
    <CartContextProvider albumDetails={albumDetails}>
      <Cart cartShow={cartShow} cartHide={hideCart}/>
      <NavbarTop setCartShow={showCart}/>
      <hr className="p-3"/>
      <HeadingBar/>
      <Album albumDetails1={albumDetails[0]} albumDetails2={albumDetails[1]}/>
      <Album albumDetails1={albumDetails[2]} albumDetails2={albumDetails[3]}/>
      <Button onClick={showCart} className="mt-4" style={{marginLeft:"780px",width:"150px",height:"60px",fontWeight:"bold",backgroundColor:"orange"}}>  
        VIEW CART
      </Button>
    </CartContextProvider>
  );
};

export default App;
