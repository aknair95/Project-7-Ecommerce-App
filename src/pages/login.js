import classes from "./login.module.css";
import { Button,Container,Form,Navbar } from "react-bootstrap";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/authContext";

const Login=() =>{
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
    const authCtx=useContext(AuthContext);

    const loginHandler= async (e) =>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value; 

        try{ 
            const response= await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAp5p5uu04Cw4kQK-AghTVrCMiAd4RXJL0",{
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
             });
             authCtx.login(response.data.idToken);
             localStorage.setItem("token",response.data.idToken);
             navigate("/store");
            } catch(error){
                alert("!!! Incorrect Email or Password !!!");
            }
        
        emailRef.current.value="";
        passwordRef.current.value="";
    }

    const createNewAccHandler=() =>{
        navigate("/login/signUp");
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
            <h3 className="p-2">LOGIN</h3>
            <Form onSubmit={loginHandler}>
                <Form.Group className="p-3">                    
                    <Form.Control type="email" placeholder="Enter Email ID" required size="lg" ref={emailRef}/>
                </Form.Group>
                <Form.Group className="p-3">                      
                    <Form.Control type="password" placeholder="Enter Password" required size="lg" ref={passwordRef} />
                </Form.Group>
                <div className={classes.loginBtn}>
                    <Button type="submit" size="lg">LOGIN</Button>
                </div>
                <div className={classes.newAccBtn}>
                    <Button variant="link" size="lg" onClick={createNewAccHandler}>Create New Account</Button>
                </div>
            </Form>
        </Container> 
        <br/><br/>      
    </>
    )
}

export default Login;