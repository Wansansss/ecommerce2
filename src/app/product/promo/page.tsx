import Container from "@/components/utils/Container";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import {getProduct} from "@/libs/api";

const Page = async () => {
    const productPromo = await getProduct("/promo",`q=10`)
    console.log(productPromo)
    if (productPromo.status !== "OK"){
      return(
       <NotFound title="Tidak Ada Product Promo...."/>
        )
    } 
  return (
    <Container>
      <div className="py-16">
      <h1 className="pt-16 drop-shadow-md text-center text-4xl font-semibold">Promo Spesial</h1>
      <hr className="bg-red-600 w-full h-2" />
          <ProductCard list={productPromo}/>
      </div>
     
    </Container>
  );
};

export default Page;
