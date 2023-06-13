import { Container, Navbar } from "react-bootstrap";

const HeadingBar=() =>{
    return(
    <Navbar expand="sm" variant="dark" style={{height:"250px",backgroundColor:"#777777ff"}}>
        <Container>
            <Navbar.Brand style={{fontSize:"140px",marginLeft:"300px",marginBottom:"80px",fontFamily:"times-new-roman"}}>
                The Generics
            </Navbar.Brand>
        </Container>
    </Navbar>
    )
}

export default HeadingBar;