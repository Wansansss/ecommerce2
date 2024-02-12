'use client'

import Link from "next/link";
import Navlink from "./Navlink";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import SideBar from "./SideBar";

import Container from "../Container";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <Container>
      <nav  className="fixed top-0 left-0 right-0 z-10 bg-slate-100 bg-opacity-75 border-b-[1px]">
      <section className="flex flex-wrap items-center justify-between mx-auto gap-4 p-8">
        <Link
          href={"/"}
        >
          <Image
          className="flex items-center"
          height={40}
          width={70}
          src="/assets/img/logo.png"
          alt="logo"
          />
        </Link>

        <SideBar />

        <div className="hidden md:block md:w-auto">
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <Navlink />
            <div className="flex items-center gap-4">
              <button className="hover:text-red-600 transition-all duration-500">
                <IoSearchOutline />
              </button>
              <button className="hover:text-red-600 transition-all duration-500">
                <FaShoppingCart />
              </button>
              <Link href={"/login"} className=" hidden md:flex items-center gap-1 hover:text-red-600 transition-all duration-500">
                <MdAccountCircle />
                LOGIN
              </Link>
            </div>
          </ul>
        </div>
      </section>
    </nav>
    </Container>
    </>
    
    
  );
};

export default Navbar;
