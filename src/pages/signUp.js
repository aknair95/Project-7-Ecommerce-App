import classes from "./signUp.module.css";
import { Button,Container,Form,Navbar } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=() =>{
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();

    const formSubmitHandler=(e) =>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value; 
        
        emailRef.current.value="";
        passwordRef.current.value="";
    }

    const loginExistingAccHandler=() =>{
        navigate("/login");
    }

    return(
    <>
        <hr className="p-4"/>
        <Navbar expand="sm" variant="dark" className={classes.navbarHeading}>
            <Container>
                <Navbar.Brand className={classes.headingPosition}>
                        <div className={classes.heading}>The Generics<hr/></div>  
                </Navbar.Brand>
            </Container>
        </Navbar>
        <br/><hr/><br/>
        <Container className={classes.formContainer}>
            <h3 className="p-2">SIGN UP</h3>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group className="p-3">                    
                    <Form.Control type="email" placeholder="Enter Email ID" size="lg" ref={emailRef}/>
                </Form.Group>
                <Form.Group className="p-3">                      
                    <Form.Control type="password" placeholder="Enter Password" size="lg" ref={passwordRef} />
                </Form.Group>
                <div className={classes.signUpBtn}>
                    <Button type="submit" size="lg">SIGN UP</Button>
                </div>
                <div className={classes.loginBtn}>
                    <Button variant="link" size="lg" onClick={loginExistingAccHandler}>Login With Existing Account</Button>
                </div>
            </Form>
        </Container> 
        <br/><br/>      
    </>
    )
}

export default SignUp;