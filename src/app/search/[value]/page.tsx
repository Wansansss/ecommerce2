import Heading from "@/components/utils/Heading";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getSearchProduct } from "@/libs/api";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const Search = async ({ params }: any) => {
  const keyword = params.value;
  const decodedKeyword = decodeURI(keyword);
  const searchProduct = await getSearchProduct(decodedKeyword);
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

export default Search;
