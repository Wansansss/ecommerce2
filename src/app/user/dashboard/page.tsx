import { getSession } from "@/actions/getCurrentUser";
import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import UserCard from "./UserCard";


const Page = async () => {
  const user = await getSession();
  // console.log(user);

  return (
    <Container>
            <UserCard currentUser={user}/>
            
    </Container>
  );
};

export default Page;
