import { Button, Card, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./productDetail.module.css";

const ProductDetails=() =>{
    const param=useParams();

    return(
        <>
            <br/><br/><br/>
            <Card>
                <Nav className={classes.albumHeading}>
                    <Navbar.Brand>
                        <div>ALBUM 1</div>
                    </Navbar.Brand>
                </Nav><br/><hr/>
                <Container className={classes.container}>
                    <Carousel className={classes.carousel}>
                        <Carousel.Item>
                            <img src="/images/album1/colors1.jpg" alt="color1" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>COLORS ONE</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/images/album1/colors2.jpg" alt="color2" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>COLORS TWO</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/images/album1/colors3.jpg" alt="color3" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>COLORS THREE</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Card><br/><hr/>
            <Nav className={classes.reviews}>
                <Navbar.Brand>
                    <div>REVIEWS</div>
                </Navbar.Brand>
            </Nav><br/>
            <div className={classes.rateBtn}>
                <Button>RATE PRODUCT</Button>   
            </div><br/>
        </>
    )
}

export default ProductDetails;