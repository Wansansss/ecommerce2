"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import SideBar from "./SideBar";
import Container from "../utils/Container";
import Image from "next/image";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
      <Container>
        <nav className="fixed top-0 left-0 right-0 z-10 bg-slate-300 px-4 bg-opacity-90">
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

            <SideBar />

            <div className="hidden md:block md:w-auto">
              <ul className=" flex p-2 md:p-0 md:space-x-6 space-x-0">
                <div className="flex items-center justify-center gap-4">
                  <InputSearch />
                  <Navlink />
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="hover:text-red-600 transition-all duration-500">
                    <FaShoppingCart />
                  </button>
                  <Link
                    href={"/login"}
                    className=" hidden md:flex items-center gap-1 hover:text-red-600 transition-all duration-500"
                  >
                    LOGIN
                  </Link>
                </div>
              </ul>
            </div>
          </section>
        </nav>
      </Container>
  );
};

export default Navbar;
