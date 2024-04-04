import Container from "@/components/utils/Container";
import ProductCard from "@/components/utils/products/ProductCard";
import { getProductList } from "@/libs/api";

const Page = async () => {
    const products = await getProductList()
  return (
    <Container>
      <h1 className="h-full pt-40 text-center text-2xl font-bold">Promo Spesial</h1>
      <div className="h-full pt-6 pb-12 px-4 flex flex-row gap-12">
        <div>Bagian Kiri</div>
        
          <ProductCard list={products}/>
      </div>
    </Container>
  );
};

export default Page;
