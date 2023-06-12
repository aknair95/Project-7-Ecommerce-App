import { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";


const NavbarTop=() =>{
    return(
        <Fragment>
            <Navbar bg="black" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand style={{fontFamily:"times-new-roman"}} className="m p-1">
                        <h2 className="text">HOME STORE ABOUT</h2>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarTop;