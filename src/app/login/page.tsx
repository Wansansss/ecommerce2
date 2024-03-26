import Container from "../../components/utils/Container";
import FormWrap from "../../components/utils/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
    return ( 
        <Container>
            <FormWrap>
                <LoginForm/>
            </FormWrap>
        </Container>

     );
}
 
export default Login;