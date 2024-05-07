import Container from "@/components/utils/Container";
import { getProductDetail} from "@/libs/api";
import ProductDetails from "./ProductDetails";
import NotFound from "@/components/utils/NotFound";


const Page = async ({params}:any) => {
  const product = await getProductDetail(params.Id)
  if(product.status !== "OK") {
    return(
      <NotFound title="Product Tidak Ditemukan..."/>
    )
  }
  return(
   <Container>
    <ProductDetails data={product.data}/>
   </Container>
  )
};

export default Page;
