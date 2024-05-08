import Container from "@/components/utils/Container";
import CartClient from "./CartClient";
import { getSession } from "@/actions/getCurrentUser";

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
