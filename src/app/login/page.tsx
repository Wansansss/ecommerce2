import { getSession } from "@/actions/getCurrentUser";
import Container from "../../components/utils/Container";
import FormWrap from "../../components/utils/FormWrap";
import LoginForm from "./LoginForm";

const Login = async () => {
    const user = await getSession()
    return ( 
        <Container>
            <FormWrap>
                <LoginForm currentUser={user}/>
            </FormWrap>
        </Container>

     );
}
 
export default Login;