import classes from "./signUp.module.css";
import { Button,Container,Form,Navbar } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp=() =>{
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();

    const signUpHandler= async (e) =>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value; 

        try{ 
            await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAp5p5uu04Cw4kQK-AghTVrCMiAd4RXJL0",{
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
             });
            navigate("/login");
            } catch(error){
                alert("Please enter valid email & password(min length- 6 character)");
            }
        
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
            <Form onSubmit={signUpHandler}>
                <Form.Group className="p-3">                    
                    <Form.Control type="email" placeholder="Enter Email ID" required size="lg" ref={emailRef}/>
                </Form.Group>
                <Form.Group className="p-3">                      
                    <Form.Control type="password" placeholder="Enter Password" minLength={6} required size="lg" ref={passwordRef} />
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