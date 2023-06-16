import { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer=() =>{
    return(
        <Fragment>
            <Navbar expand="sm" variant="dark" style={{height:"150px",backgroundColor:"lightpink"}}>
                <Container>
                    <Navbar.Brand style={{fontSize:"70px",marginLeft:"60px",marginBottom:"10px",fontFamily:"times-new-roman"}}>
                    The Generics
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Footer;