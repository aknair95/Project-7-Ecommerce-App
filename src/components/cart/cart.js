import { Button, Modal } from "react-bootstrap";
import { Fragment, useContext } from "react";
import CartContext from "../../store/cartContext";

const Cart = (props) => {
    const cartCtx=useContext(CartContext);

    const removeBtnHandler=(e) =>{
        const item={title: e.target.value};
        cartCtx.removeItem(item);
    }

    const filteredCartItems=cartCtx.cartItems.filter((element) =>{
        return element.qty>0;
    })

    const totalCartAmount=filteredCartItems.reduce((totalAmt,element) =>{
        return totalAmt+element.price*element.qty;
    },0);

    const orderBtnHandler=(e) =>{
      alert("!!! ORDER PLACED !!!")
    }

  return (
    <Fragment>
      <Modal show={props.cartShow} onHide={props.cartHide} size="lg">
        <Modal.Header>
          <h1 style={{fontWeight:"bold",marginLeft:"320px",fontFamily:"times-new-roman"}}>CART</h1>
          <Button onClick={props.cartHide} className="btn btn-danger text-white">X</Button>
        </Modal.Header>
        <Modal.Body>
            <ul>{
                filteredCartItems.map((element) =>{
                    return (<>
                            <li key={element.title}>
                              <img style={{width:"80px",height:"80px",borderRadius:"10px"}} src={element.imageUrl}/>    
                              <h5>TITLE- {element.title}</h5>
                              <h5>PRICE- Rs {element.price}</h5>
                              <h5>QTY- {element.qty}</h5>
                              <Button onClick={removeBtnHandler} value={element.title} className="btn-danger" style={{float:"right"}}>REMOVE</Button>
                            </li>
                            <br/>
                            <hr/>
                            </>)
                        })
            }</ul>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:"center"}}>
            <h4 style={{fontFamily:"times-new-roman",fontWeight:"bold"}}>TOTAL AMOUNT- Rs {totalCartAmount}</h4>
            {totalCartAmount>0 && <Button size="lg" style={{fontWeight:"bold"}} onClick={orderBtnHandler}>ORDER</Button>}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Cart;
