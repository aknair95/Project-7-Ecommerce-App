import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navbar";

// to fix navbar in all pages with the content of current selected page.
const RootPage=(props) =>{          
    return(
        <>
            <NavigationBar setCartShow={props.showCart} setCartHide={props.hideCart} albumDetails={props.albumDetails}/>
            <Outlet/>
        </>
    )
}

export default RootPage;