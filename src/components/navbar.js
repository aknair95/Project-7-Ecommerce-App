
import { Navbar,Nav } from "react-bootstrap";
import CartCounter from "./cart/cartCounter";
import CartBtn from "./cart/cartBtn";

const NavigationBar=(props) =>{
    return(
        <>
            <Navbar bg="dark" expand="sm" variant="light" fixed="top">
                <Nav variant="tabs" style={{marginLeft:"660px"}}>
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
                    <Nav.Item>
                        <Nav.Link href="/contactUs" style={{fontFamily:"times-new-roman",fontWeight:"bold",fontSize:"20px",color:"blue"}} 
                        active={props.contactUsPage}>CONTACT_US</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav style={{marginLeft:"480px"}}>
                    {props.storePage && <CartBtn setCartShow={props.setCartShow}/>}
                    {props.storePage && <CartCounter/>}    
                </Nav>       
            </Navbar>
        </>
    )
}

export default NavigationBar;