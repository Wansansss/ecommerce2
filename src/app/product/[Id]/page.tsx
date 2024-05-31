import Container from "@/components/utils/Container";
import { getProduct } from "@/libs/api";
import NotFound from "@/components/utils/NotFound";
import ProductDetails from "./ProductDetails";


const Page = async ({params}:any) => {
  const id= params.Id
  const product = await getProduct("",`secureId=${id}`)
  // console.log(product)
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