
import { Navbar,Nav,Button, Container} from "react-bootstrap";
import CartCounter from "./cart/cartCounter";
import CartBtn from "./cart/cartBtn";
import { useLocation, useNavigate} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/authContext";
import CartContext from "../store/cartContext";
import classes from "./navbar.module.css";

const NavigationBar=(props) =>{

    const productsId=["/store/a1","/store/a2","/store/a3","/store/a4"];

    const location=useLocation();
    const activePath=location.pathname;
    const navigate=useNavigate();
    const authCtx=useContext(AuthContext);
    const cartCtx=useContext(CartContext);
    
    const logoutHandler=() =>{
        localStorage.removeItem("token");
        authCtx.logout();
        props.albumDetails.forEach(element =>{
            cartCtx.removeItem(element);
        });
        localStorage.removeItem("emailId");
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
                <Container className={classes.navbar}>
                    <Nav variant="tabs">
                        <Nav.Link 
                        href="/" 
                        style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={homePage}>HOME
                        </Nav.Link>
                        <Nav.Link 
                        href="/store" 
                        style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={storePage || storeProductPage}>STORE
                        </Nav.Link>
                        <Nav.Link 
                        href="/about" 
                        style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={aboutPage}>ABOUT
                        </Nav.Link>
                        <Nav.Link 
                        href="/contactUs" 
                        style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={contactUsPage}>CONTACT_US
                        </Nav.Link>
                    { !authCtx.isLoggedIn && 
                        <Nav.Link 
                        href="/login" 
                        style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"red"}} 
                        active={loginPage || signUpPage}>{signUpPage ? "SIGN UP" : "LOGIN"}
                        </Nav.Link> }
                    { authCtx.isLoggedIn && 
                        <Button 
                        variant="outline-danger" 
                        onClick={logoutHandler} 
                        style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"red"}}>
                        LOGOUT</Button> }              
                </Nav>
                {(storePage || storeProductPage) && <CartBtn setCartShow={props.setCartShow}/>}
                {(storePage || storeProductPage) && <CartCounter/>}  
            </Container>          
        </>
    )
}

export default NavigationBar;