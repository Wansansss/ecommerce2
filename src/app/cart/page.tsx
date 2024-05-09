import Container from "@/components/utils/Container";
import CartClient from "./CartClient";

const Cart = () => {
  return (
    <Container>
      <div className="py-32">
        <CartClient />
      </div>
    </Container>
  );
};

export default Cart;
