import Heading from "@/components/utils/Heading";
import ProductCard from "@/components/utils/products/ProductCard";
import { getSearchProduct } from "@/libs/api";

const Search = async ({params}:any) => {
    const keyword = params.value
    const decodedKeyword = decodeURI(keyword)
    const searchProduct = await getSearchProduct(decodedKeyword)
    
    
    return (
       <div className="py-16">
      <div className="py-16">
        <Heading title={`Pencarian Untuk : ${decodedKeyword}...`} />
        <ProductCard list={searchProduct} />
      </div>
    </div>
      );
}
 
export default Search;