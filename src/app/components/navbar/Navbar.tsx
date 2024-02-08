
import Link from "next/link";
import Navlink from "./Navlink";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" mx-auto flex w-full justify-between px-4 py-5 text-sm bg-slate-100">
      <section className="flex items-center gap-10 text-3xl m-4 px-8">
        {/* Logo */}
        <Link href="/"> LOGO </Link>
      </section>
      {/* Navlink */}
      <div className="flex items-center gap-8" >
        <div className="flex items-center gap-4 transition-all">
        <Navlink />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hover:text-red-600 transition-all duration-500">
            <IoSearchOutline />
          </button>
          <button className="hover:text-red-600 transition-all duration-500">
            <FaShoppingCart />
          </button>
          <button className="hover:text-red-600 transition-all duration-500 flex items-center gap-1">
            <MdAccountCircle />
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
