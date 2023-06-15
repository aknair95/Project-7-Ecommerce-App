import { Button, Modal } from "react-bootstrap";
import { Fragment } from "react";

const Cart = (props) => {
  const cartItems = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]

  return (
    <Fragment>
      <Modal show={props.cartShow} onHide={props.cartHide} size="lg">
        <Modal.Header>
          <h1 style={{fontWeight:"bold",marginLeft:"320px",fontFamily:"times-new-roman"}}>CART</h1>
          <Button onClick={props.cartHide} className="btn btn-danger text-white">X</Button>
        </Modal.Header>
        <Modal.Body>
            <ul>{
                cartItems.map((element) =>{
                    return (<>
                            <li key={element.title}>
                            <img style={{width:"80px",height:"80px",borderRadius:"10px"}} src={element.imageUrl}/>    
                            <h5>TITLE- {element.title}</h5>
                            <h5>PRICE- Rs {element.price}</h5>
                            <h5>QTY- {element.quantity}</h5>
                            <Button id={element.title} className="btn-danger" style={{float:"right"}}>REMOVE</Button>
                            </li>
                            <br/>
                            <hr/>
                            </>)
                    })
            }</ul>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Cart;
