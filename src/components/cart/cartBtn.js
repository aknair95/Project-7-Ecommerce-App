import { Fragment } from "react";
import { Button} from "react-bootstrap";

const CartBtn=(props) =>{
    return(
        <Fragment>
             <Button onClick={props.setCartShow} size="md" style={{fontWeight:"bold",marginLeft:"550px"}}>CART</Button>
        </Fragment>
    )
}

export default CartBtn;