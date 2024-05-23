import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import FormAlamat from "@/components/utils/form/FormAlamat";

const page = () => {
    return (  
        <Container>
            <FormWrap>
                <FormAlamat/>
            </FormWrap>
        </Container>
    );
}
 
export default page;