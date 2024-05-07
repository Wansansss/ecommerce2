import Heading from "@/components/utils/Heading";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getProduct } from "@/libs/api";

const Page = async ({ params }: any) => {

  const keyword = params.value;
  console.log("Ini Keyword: " + params.value1);
  console.log("Ini Keyword: " + keyword)
  const decodedKeyword = decodeURI(keyword);
  const searchProduct = await getProduct(decodedKeyword);
  if (searchProduct.status !== "OK") {
    return(
     <NotFound title="Product Tidak Ditemukan ..."/>
      )
  }

  return (
    <div className="py-16">
      <div className="py-16">
        <Heading title={`Pencarian Untuk : ${decodedKeyword}...`} />
        <ProductCard list={searchProduct} />
      </div>
    </div>
  );
};

export default Page;
