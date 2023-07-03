
import { Navbar,Nav } from "react-bootstrap";
import CartCounter from "./cart/cartCounter";
import CartBtn from "./cart/cartBtn";
import { useLocation} from "react-router-dom";

const NavigationBar=(props) =>{

    const location=useLocation();
    const activePath=location.pathname;
    let homePage,storePage,aboutPage,contactUsPage,loginPage,signUpPage;
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
                        active={storePage}>STORE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={aboutPage}>ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contactUs" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={contactUsPage}>CONTACT_US</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"red"}} 
                        active={loginPage || signUpPage}>{loginPage ? "LOGIN" : "SIGN UP"}</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav style={{marginLeft:"400px"}}>
                    {storePage && <CartBtn setCartShow={props.setCartShow}/>}
                    {storePage && <CartCounter/>}    
                </Nav>       
            </Navbar>
        </>
    )
}

export default NavigationBar;