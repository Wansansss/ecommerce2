import { getSession } from "@/actions/getCurrentUser";
import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import FormAlamat from "@/components/utils/form/FormAlamat";

const page = () => {
    const user = getSession()
    return (  
        <Container>
            <FormWrap>
                <FormAlamat currentUser={user}/>
            </FormWrap>
        </Container>
    );
}
 
export default page;