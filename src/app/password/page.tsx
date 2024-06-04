import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import LupaPasswordForm from "./LupaPassword";

const LupaPassword = () => {
    return (
        <Container>
        <div className="py-16">
          <FormWrap>
            <LupaPasswordForm />
          </FormWrap>
        </div>
      </Container>
      );
}
 
export default LupaPassword;