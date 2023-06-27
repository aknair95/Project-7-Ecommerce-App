import { Button, Card, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./productDetail.module.css";
import CartContext from "../store/cartContext";
import { useContext } from "react";

const ProductDetails=(props) =>{
    props.setStorePage(true);

    const param=useParams();
    let index=-1;
    let count=0;
    props.albumDetails.map((item) =>{
        if(item.id===param.Id){
            return index=count;
         } 
         count++;
        });

        const cartCtx=useContext(CartContext);

        const onClickAddtoCart=(e) =>{
            const item={title: e.target.value};
            cartCtx.addItem(item,1);
        }
        
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
                    <Carousel className={classes.carousel} fade data-bs-theme="dark">
                        <Carousel.Item>
                            <img src={props.albumDetails[index].img1Src} alt="color1" className={classes.image}/>
                            <Carousel.Caption>
                                <h2>{`${props.albumDetails[index].title} ONE`}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={props.albumDetails[index].img2Src} className={classes.image}/>
                            <Carousel.Caption>
                                <h2>{`${props.albumDetails[index].title} TWO`}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={props.albumDetails[index].img3Src} className={classes.image}/>
                            <Carousel.Caption>
                                <h2>{`${props.albumDetails[index].title} THREE`}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Card><br/><hr/>
            <div className={classes.Btn}>
                <Button value={props.albumDetails[index].title} onClick={onClickAddtoCart} className={classes.cartBtn}>
                    ADD TO CART
                </Button>
            </div><br/>
            <Nav className={classes.reviews}>
                <Navbar.Brand>
                    <div>REVIEWS</div>
                </Navbar.Brand>
            </Nav><br/>
            <div className={classes.Btn}>
                <Button className={classes.rateBtn}>RATE PRODUCT</Button>   
            </div><br/>
        </>
    )
}

export default ProductDetails;