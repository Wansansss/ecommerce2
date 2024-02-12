import Container from "@/app/components/Container";
import ProductDetails from "../ProductDetails";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  return (
    <div className="min-h-fit
    h-full
    flex
    items-center
    justify-center
    pb-12
    pt-24">
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
};

export default Product;
