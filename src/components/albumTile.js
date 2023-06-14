import { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Album=(props) =>{
    return(
        <Fragment>
            <Container className="mt-4">
                <Row>
                    <Col className="mt-4" xs={4}>
                        <Card className="shadow-lg">
                            <Card.Header className="text-center" style={{fontWeight:"bold",fontFamily:"times-new-roman",fontSize:"26px"}}>{props.albumDetails1.title}</Card.Header>
                            <Card.Body style={{marginLeft:"38px"}}><img src={props.albumDetails1.imageUrl}/></Card.Body>
                            <Card.Footer className="text-center">
                                <h5 style={{fontWeight:"bold"}}>{`Rs ${props.albumDetails1.price}`}</h5>
                            </Card.Footer>
                            <Button style={{fontWeight:"bold",float:"right"}}>ADD TO CART</Button>
                        </Card>
                    </Col>
                    <Col className="mt-4" xs={4} style={{marginLeft:"26rem"}}>
                        <Card className="shadow-lg">
                            <Card.Header className="text-center" style={{fontWeight:"bold",fontFamily:"times-new-roman",fontSize:"26px"}}>{props.albumDetails2.title}</Card.Header>
                            <Card.Body style={{marginLeft:"38px"}}><img src={props.albumDetails2.imageUrl}/></Card.Body>
                            <Card.Footer className="text-center">
                                <h5 style={{fontWeight:"bold"}}>{`Rs ${props.albumDetails2.price}`}</h5>
                            </Card.Footer>
                            <Button style={{fontWeight:"bold",float:"right" }}>ADD TO CART</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>     
        </Fragment>
    )
}

export default Album;