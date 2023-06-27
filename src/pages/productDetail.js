import { Button, Card, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./productDetail.module.css";

const ProductDetails=(props) =>{
    const param=useParams();
    let index=-1;
    let count=0;
    props.albumDetails.map((item) =>{
        if(item.id===param.Id){
            return index=count;
         } 
         count++;
        });
    return(
        <>
            <br/><br/><br/>
            <Card>
                <Nav className={classes.albumHeading}>
                    <Navbar.Brand>
                        <div>{`ALBUM- ${props.albumDetails[index].title}`}</div>
                    </Navbar.Brand>
                </Nav><br/><hr/>
                <Container className={classes.container}>
                    <Carousel className={classes.carousel}>
                        <Carousel.Item>
                            <img src="/images/album1/colors1.jpg" alt="color1" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>{`${props.albumDetails[index].title} ONE`}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/images/album1/colors2.jpg" alt="color2" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>{`${props.albumDetails[index].title} TWO`}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/images/album1/colors3.jpg" alt="color3" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>{`${props.albumDetails[index].title} THREE`}</h2>
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