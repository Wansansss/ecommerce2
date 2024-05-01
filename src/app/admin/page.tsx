import { getSession } from "@/actions/getCurrentUser";

const Admin = async () => {
    const user = await getSession()
  return <div className="py-44 ">
    Admin Page

  </div>;
};

export default Admin;
