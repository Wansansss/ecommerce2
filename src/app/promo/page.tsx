import Container from "@/components/utils/Container";
import ProductCard from "@/components/utils/products/ProductCard";
import {getProductPromo } from "@/libs/api";

const Page = async () => {
    const products = await getProductPromo("page=1")
  return (
    <Container>
      <div className="py-16">
      <h1 className="pt-16 drop-shadow-md text-center text-4xl font-semibold">Promo Spesial</h1>
      <hr className="bg-red-600 w-full h-2" />
          <ProductCard list={products}/>
      </div>
     
    </Container>
  );
};

export default Page;
