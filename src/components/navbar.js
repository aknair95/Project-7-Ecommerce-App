import { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import CartCounter from "./cart/cartCounter";
import CartBtn from "./cart/cartBtn";


const NavbarTop=() =>{
    return(
        <Fragment>
            <Navbar bg="black" expand="sm" variant="dark" style={{height:"55px"}}>
                <Container>
                    <Navbar.Brand style={{fontFamily:"times-new-roman",marginLeft:"560px"}}>
                        <h4>HOME STORE ABOUT</h4>
                    </Navbar.Brand>
                    <CartBtn/>
                    <CartCounter/>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarTop;