import Container from "@/components/utils/Container";
import CartClient from "./CartClient";

const Cart = () => {
    return ( 
        <div className="mt-40 mx-8">
            <Container>
                <h1><CartClient/></h1>
            </Container>
        </div>
     );
}
 
export default Cart;