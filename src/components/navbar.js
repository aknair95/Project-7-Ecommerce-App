
import { Navbar,Nav } from "react-bootstrap";
import CartCounter from "./cart/cartCounter";
import CartBtn from "./cart/cartBtn";
import CartContextProvider from "../store/cartContextProvider";

const NavigationBar=(props) =>{
    return(
        <CartContextProvider albumDetails={props.albumDetails}>
            <Navbar bg="dark" expand="sm" variant="light" fixed="top">
                <Nav variant="tabs" style={{marginLeft:"750px"}}>
                    <Nav.Item>
                        <Nav.Link href="/" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={props.homePage}>HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/store" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={props.storePage}>STORE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={props.aboutPage}>ABOUT</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav style={{marginLeft:"560px"}}>
                    {props.storePage && <CartBtn setCartShow={props.setCartShow}/>}
                    {props.storePage && <CartCounter/>}    
                </Nav>       
            </Navbar>
        </CartContextProvider>
    )
}

export default NavigationBar;