import Container from "../../components/utils/Container";
import FormWrap from "../../components/utils/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = async() => {
    return ( 
        <Container>
            <div className="py-16">
            <FormWrap>
                <RegisterForm/>
            </FormWrap>
            </div>
            
        </Container>

     );
}
 
export default Register;