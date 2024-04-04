import Container from "@/components/utils/Container";
import { getProductDetail} from "@/libs/api";
import ProductDetails from "./ProductDetails";


const Page = async ({params}:any) => {
  const product = await getProductDetail(params.Id)
  return(
   <Container>
    <ProductDetails data={product.data}/>
   </Container>
  )
};

export default Page;
