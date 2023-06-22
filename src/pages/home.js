
import { Button, Card, Col, Container, ListGroup, Navbar, Row} from "react-bootstrap";

const Home=(props) =>{
    props.setHomePage(true);

    const tours=[
        {
            date: "JUL16",
            city: "DETROIT,MI",
            location: "DTE ENERGY MUSIC THEATRE",
         },
         {
            date: "JUL19",
            city: "TORONTO,ON",
            location: "BUDWEISER STAGE",
         },
         {
            date: "JUL 22",
            city: "BRISTOW, VA",
            location: "JIGGY LUBE LIVE",
         },
         {
            date: "JUL 29",
            city: "PHOENIX, AZ",
            location: "AK-CHIN PAVILION",
         },
         {
            date: "AUG 2",
            city: "LAS VEGAS, NV",
            location: "T-MOBILE ARENA",
         },
         {
            date: "AUG 7",
            city: "CONCORD, CA",
            location: "CONCORD PAVILION",
         },
    ]

    return (
        <>
            <hr className="p-4"/>
            <Navbar expand="sm" variant="dark" style={{height:"250px",backgroundColor:"#777777ff"}}>
                <Container>
                    <Navbar.Brand style={{fontSize:"140px",marginLeft:"280px",marginBottom:"80px",fontFamily:"times-new-roman"}}>
                        The Generics<hr/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Navbar.Brand style={{fontSize:"35px",marginLeft:"580px",fontFamily:"cursive",fontWeight:"bolder"}}>
                        TOURS<hr/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Card>
                <ListGroup as="ul" style={{fontFamily: "times-new-roman"}}>
                    { 
                        tours.map((item) =>{
                            return (<>
                                    <ListGroup.Item as="li">
                                        <Container style={{marginLeft:"280px"}}>
                                            <Row className="justify-content-md-center">
                                                <Col>
                                                    <h4 style={{fontWeight:"bold"}}>{item.date}</h4>
                                                </Col>
                                                <Col>
                                                    <h5>{item.city}</h5>
                                                </Col>
                                                <Col>
                                                    <h5>{item.location}</h5> 
                                                </Col>
                                                <Col>
                                                    <Button disabled>BUY TICKETS</Button>
                                                </Col>
                                            </Row>
                                        </Container>  
                                    </ListGroup.Item>
                            </>)
                        })
                    }
                </ListGroup>
            </Card>
        </>
    )
}

export default Home;