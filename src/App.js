
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import About from "./pages/about";
import { useEffect, useState } from "react";
import RootPage from "./pages/root";
import ContactUs from "./pages/contactUs";
import axios from "axios";
import CartContextProvider from "./store/cartContextProvider";
import ProductDetails from "./pages/productDetail";


const App = () => {
  const albumDetails=[
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      img1Src: "/images/album1/colors1.jpg",
      img2Src: "/images/album1/colors2.jpg",
      img3Src: "/images/album1/colors3.jpg",
      qty:0,
      id: "a1"
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      img1Src: "/images/album2/b&w1.jpg",
      img2Src: "/images/album2/b&w2.jpg",
      img3Src: "/images/album2/b&w3.jpg",
      qty:0,
      id: "a2"
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      img1Src: "/images/album3/y&b1.jpg",
      img2Src: "/images/album3/y&b2.jpg",
      img3Src: "/images/album3/y&b3.jpg",
      qty:0,
      id: "a3"
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      img1Src: "/images/album4/blue1.jpg",
      img2Src: "/images/album4/blue2.jpg",
      img3Src: "/images/album4/blue3.jpg",
      qty:0,
      id: "a4"
    },
  ]

  const [cartShow,setCartShow]=useState(false);

  const showCart=() =>{
    setCartShow(true);
  }

  const hideCart=() =>{
    setCartShow(false);
  }

  const addUserInfoHandler= async (name,email,mobNo) =>{
   try{ 
      await axios.post("https://ecommerce-generics-default-rtdb.firebaseio.com/usersInfo.json",{
          name: name,
          email: email,
          mobNo: mobNo
        }); 
    } catch(error){
      console.log(error);
    }
  }

  // useEffect hook for post request to firebase
  useEffect(() =>{
    addUserInfoHandler()
  },[addUserInfoHandler])

  const router=createBrowserRouter([
    { path: "/",
      element: <RootPage showCart={showCart} hideCart={hideCart}/>,
      children: [
       { path: "/", element: <Home/> },
       { path: "/store", element: <Store cartShow={cartShow} hideCart={hideCart} showCart={showCart} albumDetails={albumDetails}/> },
       { path: "/about", element: <About/> },
       { path: "/contactUs", element: <ContactUs addUserInfo={addUserInfoHandler}/> },
       { path: "/store/:Id", element: <ProductDetails albumDetails={albumDetails} cartShow={cartShow} hideCart={hideCart}/> }
     ]},
    
  ]);

  return (
  <>
    <CartContextProvider albumDetails={albumDetails}>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </> 
  );
};

export default App;
