import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import FormAlamat from "./FormAlamat";
import { getSession } from "@/actions/getCurrentUser";

const Page = () => {
    const user = getSession()
    return ( 
        <>
        <Container>
            <FormWrap>
                <FormAlamat currentUser={user}/>
            </FormWrap>
        </Container>
        </>
     );
}
 
export default Page;