import { getSession } from "@/actions/getCurrentUser";
import Container from "../../components/utils/Container";
import FormWrap from "../../components/utils/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = async() => {
    const user = await getSession();
    return ( 
        <Container>
            <div className="py-16">
            <FormWrap>
                <RegisterForm currentUser={user}/>
            </FormWrap>
            </div>
            
        </Container>

     );
}
 
export default Register;