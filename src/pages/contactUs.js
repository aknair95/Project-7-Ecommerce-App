
import { Button, Card, Container,Form,Navbar } from "react-bootstrap";
import classes from "./contactUS.module.css";
import { useRef } from "react";

const ContactUs=(props) =>{
    props.setContactUsPage(true);

    const nameRef=useRef();
    const emailRef=useRef();
    const mobNoRef=useRef();

    const formSubmitHandler=(e) =>{
        e.preventDefault();
        const userInfo={
            name: nameRef.current.value,
            email: emailRef.current.value,
            mobNo: mobNoRef.current.value
        }
        props.addUserInfo(userInfo);
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
                <h3 className="p-2">CONTACT DETAILS</h3>
                <Form>
                    <Form.Group className="p-3">
                        <Form.Control type="text" placeholder="Enter Name" size="lg" ref={nameRef}/>
                        <Form.Text>*Mandatory Field</Form.Text>
                    </Form.Group>
                    <Form.Group className="p-3">                    
                        <Form.Control type="email" placeholder="Enter Email ID" size="lg" ref={emailRef}/>
                        <Form.Text>*Mandatory Field</Form.Text>
                    </Form.Group>
                    <Form.Group className="p-3">                      
                        <Form.Control type="text" placeholder="Enter Contact Number" size="lg" ref={mobNoRef}/>
                        <Form.Text>*Mandatory Field</Form.Text>
                    </Form.Group>
                    <Button type="submit" size="lg" onClick={formSubmitHandler} className="mb-3">SUBMIT</Button>
                </Form>
            </Container> 
            <br/><br/>      
        </>
    )
}

export default ContactUs;