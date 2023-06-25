
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import About from "./pages/about";
import { useCallback, useEffect, useState } from "react";
import RootPage from "./pages/root";
import ContactUs from "./pages/contactUs";
import axios from "axios";


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
  const [contactUsPage,setContactUsPage]=useState(false);

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
      element: <RootPage showCart={showCart} hideCart={hideCart} storePage={storePage} homePage={homePage} 
              aboutPage={aboutPage} albumDetails={albumDetails} contactUsPage={contactUsPage}/>,
      children: [
       { path: "/", element: <Home setHomePage={setHomePage}/> },
       { path: "/store", element: <Store cartShow={cartShow} hideCart={hideCart} showCart={showCart} 
              albumDetails={albumDetails} setStorePage={setStorePage}/> },
       { path: "/about", element: <About aboutPage={aboutPage} setAboutPage={setAboutPage}/> },
       { path: "/contactUs", element: <ContactUs setContactUsPage={setContactUsPage} addUserInfo={addUserInfoHandler}/> }
     ]},
    
  ]);

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
