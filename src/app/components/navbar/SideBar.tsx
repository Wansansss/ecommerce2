import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SingleNav from "./SingleNav";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Promo",
    link: "/promo",
  },
  {
    label: "Kategori Product",
    children: [
      {
        label: "Populer",
        link: "/populer",
      },
      {
        label: "Terbaru",
        link: "/terbaru",
      },
      {
        label: "Terlaris",
        link: "/terlaris",
      },
    ],
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className="flex items-center gap-4">
    <button className="hover:text-red-600 transition-all duration-500 md:hidden lg:hidden xl:hidden">
        <IoSearchOutline size={20} />
      </button>
      <button className="hover:text-red-600 transition-all duration-500 md:hidden lg:hidden xl:hidden">
        <FaShoppingCart size={20}/>
      </button>
      <button
        onClick={handleNav}
        className="hover:text-red-600 transition-all duration-500 md:hidden lg:hidden xl:hidden"
      >
        <FiMenu size={25} />
      </button>
    </div>
      
     

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="gap-4 p-4 flex flex-col h-screen overflow-y-auto">
          <div className="flex justify-end items-center hover:text-red-600 cursor-pointer text-black ">
            <AiOutlineClose size={32} onClick={handleNav} />
          </div>
          <div className="flex flex-col text-base gap-2 transition-all">
            {navItems.map((d, i) => (
              <SingleNav key={i} label={d.label} link={d.link}>
                {d.children}
              </SingleNav>
            ))}
          </div>
          <div className="flex flex-col mt-6 text-base items-center gap-1">
            <Link href={"/login"} className="flex items-center justify-center shadow-lg shadow-black bg-slate-600 w-full rounded-xl hover:bg-red-600 transition-all duration-300 p-2 font-semibold hover:scale-105">
              LOGIN
            </Link>
            <Link href={"/register"} className="flex items-center justify-center border w-full rounded-xl hover:bg-red-600 transition-all duration-300 shadow-lg shadow-white p-2 font-semibold hover:scale-105">
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
