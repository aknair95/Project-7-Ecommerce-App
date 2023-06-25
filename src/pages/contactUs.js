
import { Button, Card, Container,Form,Navbar } from "react-bootstrap";
import classes from "./contactUS.module.css";

const ContactUs=(props) =>{
    props.setContactUsPage(true);

    const formSubmitHandler=() =>{

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
                <h3>CONTACT DETAILS</h3>
                <Form>
                    <Form.Group className="p-3">
                        <Form.Control type="text" placeholder="Enter Name" size="lg"/>
                        <Form.Text>*Mandatory Field</Form.Text>
                    </Form.Group>
                    <Form.Group className="p-3">                    
                        <Form.Control type="email" placeholder="Enter Email ID" size="lg"/>
                        <Form.Text>*Mandatory Field</Form.Text>
                    </Form.Group>
                    <Form.Group className="p-3">                      
                        <Form.Control type="text" placeholder="Enter Contact Number" size="lg"/>
                        <Form.Text>*Mandatory Field</Form.Text>
                    </Form.Group>
                    <Button type="submit" size="lg" onClick={formSubmitHandler} className="mb-3">SUBMIT</Button>
                </Form>
            </Container>    
              
        </>
    )
}

export default ContactUs;