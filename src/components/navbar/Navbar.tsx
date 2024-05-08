import Link from "next/link";
import Navlink from "./Navlink";
import SideBar from "./SideBar";
import Container from "../utils/Container";
import Image from "next/image";
import InputSearch from "./InputSearch";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getSession } from "@/actions/getCurrentUser";

const Navbar = async () => {
  const user = await getSession();

  return (
    <Container>
      <div className="fixed top-0 left-0 right-0 z-10 bg-slate-300 bg-opacity-90">
        <section className="flex flex-wrap items-center justify-between p-4">
          <Link href={"/"}>
            <Image
              className="flex items-center"
              height={20}
              width={60}
              src="/assets/img/logo.png"
              alt="logo"
            />
          </Link>

          <SideBar currentUser={user} />

          <div className="hidden md:block md:w-auto">
            <ul className=" flex p-2 md:p-0 md:space-x-6 space-x-0">
              <div className="flex items-center justify-center gap-4">
                <InputSearch />
                <Navlink />
              </div>

              <div className="flex items-center gap-4">
                <CartCount />

                <UserMenu currentUser={user} />
              </div>
            </ul>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Navbar;
