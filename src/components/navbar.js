
import { Navbar,Nav,Button} from "react-bootstrap";
import CartCounter from "./cart/cartCounter";
import CartBtn from "./cart/cartBtn";
import { useLocation, useNavigate} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/authContext";
import CartContext from "../store/cartContext";

const NavigationBar=(props) =>{

    const productsId=["/store/a1","/store/a2","/store/a3","/store/a4"];

    const location=useLocation();
    const activePath=location.pathname;
    const navigate=useNavigate();
    const authCtx=useContext(AuthContext);
    const cartCtx=useContext(CartContext);
    
    const logoutHandler=() =>{
        authCtx.logout();
        localStorage.removeItem("token");
        localStorage.removeItem("emailId");
        props.albumDetails.forEach(element =>{
        cartCtx.removeItem(element);
        });
        navigate("/login");
    }

    let homePage,storePage,aboutPage,contactUsPage,loginPage,signUpPage,storeProductPage;
    productsId.find((item) =>{
        if(activePath===item){
            storeProductPage=true;
        }
    })
   
    switch (activePath) {
            case "/":
                homePage=true;
                break;
            case "/store":
                storePage=true;
                break; 
            case "/about":
                aboutPage=true;
                break;
            case "/contactUs":
                contactUsPage=true;
                break;
            case "/login":
                loginPage=true;
                break;
            case "/login/signUp":
                signUpPage=true;
                break;                 
    }

    return(
        <>
            <Navbar bg="dark" expand="sm" variant="light" fixed="top">
                <Nav variant="tabs" style={{marginLeft:"660px"}}>
                    <Nav.Item>
                        <Nav.Link href="/" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={homePage}>HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/store" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={storePage || storeProductPage}>STORE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={aboutPage}>ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contactUs" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={contactUsPage}>CONTACT_US</Nav.Link>
                    </Nav.Item>
                    { !authCtx.isLoggedIn && <Nav.Item>
                        <Nav.Link href="/login" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"red"}} 
                        active={loginPage || signUpPage}>{signUpPage ? "SIGN UP" : "LOGIN"}</Nav.Link>
                    </Nav.Item>}
                    { authCtx.isLoggedIn && <Nav.Item>
                        <Button variant="outline-danger" onClick={logoutHandler} style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"red"}}>
                        LOGOUT</Button>
                    </Nav.Item>}
                </Nav>
                <Nav style={{marginLeft:"300px"}}>
                    {(storePage || storeProductPage) && <CartBtn setCartShow={props.setCartShow}/>}
                    {(storePage || storeProductPage) && <CartCounter/>}    
                </Nav>       
            </Navbar>
        </>
    )
}

export default NavigationBar;