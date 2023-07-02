import { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const HeadingBar=() =>{
    
    const location=useLocation();
    let aboutPage=false;
    if(location.pathname==="/about"){
        aboutPage=true;
    }
    return(
        <Fragment>
            <Navbar expand="sm" variant="dark" style={{height:"250px",backgroundColor:"#777777"}}>
                <Container>
                    <Navbar.Brand style={{fontSize:"140px",marginLeft:"280px",marginBottom:"80px",fontFamily:"times-new-roman"}}>
                    The Generics<hr/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Navbar.Brand style={{fontSize:"35px",marginLeft:"580px",fontFamily:"cursive",fontWeight:"bolder"}}>
                        {aboutPage ? "ABOUT" : "MUSIC"}<hr/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    
    )
}

export default HeadingBar;