import Container from "@/components/utils/Container";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getProduct } from "@/libs/api";

const Page = async () => {
  const productPromo = await getProduct("/promo");
  console.log(productPromo);
  if (productPromo.status !== "OK") {
    return <NotFound title="Tidak Ada Product Promo...." />;
  }
  return (
    <Container>
      <div className="py-16">
        <div className="py-16 drop-shadow-lg text-center text-4xl font-semibold">
          <h1>Promo Spesial</h1>
          <hr className="bg-red-600 max-w-[50%] mx-auto h-1" />
        </div>
        <ProductCard list={productPromo} />
      </div>
    </Container>
  );
};

export default Page;
