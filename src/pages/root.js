import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navbar";
import CartContextProvider from "../store/cartContextProvider";

// to fix navbar in all pages with the content of current selected page.
const RootPage=(props) =>{          
    return(
        <CartContextProvider albumDetails={props.albumDetails}>
            <NavigationBar setCartShow={props.showCart} setCartHide={props.hideCart} storePage={props.storePage} 
            homePage={props.homePage} aboutPage={props.aboutPage} contactUsPage={props.contactUsPage}/>
            <Outlet/>
        </CartContextProvider>
    )
}

export default RootPage;