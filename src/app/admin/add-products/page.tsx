import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import AddProductForm from "./AddProductForm";
import { getSession } from "@/actions/getCurrentUser";
import NullData from "@/components/utils/NullData";

const AddProducts = async() => {
    // const currentUser = await getSession()
    // console.log(currentUser)

    // if(currentUser?.name != 'admin123') {
    //     return <NullData title="Anda Bukan Admin" />
    // }
    return (
        <div className="pt-16 md:pt-8 pb-12">
            <Container>
                <FormWrap>
                    <AddProductForm/>
                </FormWrap>
            </Container>
        </div>
     );
}
 
export default AddProducts;