
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import About from "./pages/about";
import { useState } from "react";
import RootPage from "./pages/root";


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

  const [homePage,setHomePage]=useState(false);
  const [storePage,setStorePage]=useState(false);
  const [aboutPage,setAboutPage]=useState(false);

  const router=createBrowserRouter([
    { path: "/",
      element: <RootPage showCart={showCart} hideCart={hideCart} storePage={storePage} homePage={homePage} 
              aboutPage={aboutPage} albumDetails={albumDetails}/>,
      children: [
       { path: "/", element: <Home setHomePage={setHomePage}/> },
       { path: "/store", element: <Store cartShow={cartShow} hideCart={hideCart} showCart={showCart} 
              albumDetails={albumDetails} setStorePage={setStorePage}/> },
       { path: "/about", element: <About aboutPage={aboutPage} setAboutPage={setAboutPage}/> }
     ]},
    
  ]);

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
