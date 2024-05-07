import Heading from "@/components/utils/Heading";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getProduct} from "@/libs/api";
const Search = async ({ params }: any) => {
  const keyword = params.value;
  const decodedKeyword = decodeURI(keyword);
  const searchProduct = await getProduct("search",`page=1&value=${decodedKeyword}`);
  console.log(searchProduct);
  if (searchProduct.status !== "OK") {
    return(
     <NotFound title="Product Tidak Ditemukan ..."/>
      )
  }

  return (
    <div className="py-16">
      <div className="py-16 px-8">
        <Heading  title={`${decodedKeyword}...`} />
        <ProductCard list={searchProduct} />
      </div>
    </div>
  );
};

export default Search;
