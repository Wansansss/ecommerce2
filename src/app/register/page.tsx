import { getSession } from "@/actions/getCurrentUser";
import Container from "../../components/utils/Container";
import FormWrap from "../../components/utils/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = async() => {
    const user = await getSession();
    return ( 
        <Container>
            <FormWrap>
                <RegisterForm currentUser={user}/>
            </FormWrap>
        </Container>

     );
}
 
export default Register;