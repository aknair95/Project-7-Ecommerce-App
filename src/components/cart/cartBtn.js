import { Fragment } from "react";
import { Button} from "react-bootstrap";

const CartBtn=(props) =>{
    return(
        <Fragment>
             <Button onClick={props.setCartShow} size="lg" style={{fontWeight:"bold",marginRight:"5px"}}>CART</Button>
        </Fragment>
    )
}

export default CartBtn;