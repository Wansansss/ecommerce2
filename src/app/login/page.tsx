import Container from "../../components/utils/Container";
import FormWrap from "../../components/utils/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
  
  return (
    <Container>
      <div className="py-16">
        <FormWrap>
          <LoginForm />
        </FormWrap>
      </div>
    </Container>
  );
};

export default Login;
