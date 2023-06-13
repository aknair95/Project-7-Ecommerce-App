import { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";

const HeadingBar=() =>{
    return(
        <Fragment>
            <Navbar expand="sm" variant="dark" style={{height:"250px",backgroundColor:"#777777ff"}}>
                <Container>
                    <Navbar.Brand style={{fontSize:"140px",marginLeft:"280px",marginBottom:"80px",fontFamily:"times-new-roman"}}>
                    The Generics
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Navbar.Brand style={{fontSize:"35px",marginLeft:"580px",fontFamily:"cursive",fontWeight:"bolder"}}>
                        MUSIC
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    
    )
}

export default HeadingBar;