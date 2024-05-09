/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SingleNav from "./SingleNav";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import InputSearch from "./InputSearch";
import CartCount from "./CartCount";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import UserMenu from "./UserMenu";
import { MdClose, MdMenu } from "react-icons/md";
import BackDrop from "./BackDrop";
import Navlink from "./Navlink";

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
    label: "Contact Us",
    link: "/contact",
  },
];

interface SideBarProps {
  currentUser: any;
}

const SideBar: React.FC<SideBarProps> = ({ currentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-center px-4">
      <div
        className={
          menuOpen
            ? "flex flex-col items-start gap-y-12 fixed top-20 right-8 p-8 bg-white rounded-3xl shadow-md w-64 transition-all duration-300 z-50"
            : "flex flex-col items-start gap-y-12 fixed top-20 p-8 bg-white rounded-3xl shadow-md w-64 transition-all duration-300 z-50 -right-[100%]"
        }
      >
        
        {navItems.map((d, i) => (
          <SingleNav key={i} label={d.label} link={d.link} />
        ))}
        <InputSearch/>
      </div>
      <div className="md:hidden xl:hidden cursor-pointer text-3xl hover:text-red-600 transition-all" 
      onClick={handleNav}>{!menuOpen ? 
      <MdMenu /> 
      : 
      <MdClose/>}</div>
      <div className="px-2 md:hidden xl:hidden">
      <CartCount />
      </div>
      <div className="px-2 md:hidden xl:hidden">
      <UserMenu currentUser={currentUser}/>
      </div>
      {menuOpen ? <BackDrop onClick={handleNav} /> : null}
    </div>

    // <>
    //   <div className="flex flex-row items-center gap-4">
    //     <div className="flex md:hidden">
    //       <InputSearch />
    //     </div>
    //     <div className="md:hidden">
    //       <CartCount />
    //     </div>

    //     <button
    //       onClick={handleNav}
    //       className="hover:text-red-600 transition-all duration-500 md:hidden lg:hidden xl:hidden"
    //     >
    //       <FiMenu size={25} />
    //     </button>
    //   </div>

    //   <div
    //     className={
    //       menuOpen
    //         ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500"
    //         : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
    //     }
    //   >
    //     <div className="gap-4 p-4 flex flex-col h-screen overflow-y-auto">
    //       <div className="flex justify-end items-center hover:text-red-600 cursor-pointer text-black ">
    //         <AiOutlineClose size={32} onClick={handleNav} />
    //       </div>
    //       <div className="flex flex-col text-base gap-2 transition-all">
    //         {navItems.map((d, i) => (
    //           <SingleNav key={i} label={d.label} link={d.link} />
    //         ))}
    //       </div>
    //       {!currentUser ? (
    //         <div className="flex flex-col mt-6 text-base items-center gap-1">
    //           <Link
    //             href={"/login"}
    //             className="flex items-center justify-center shadow-lg shadow-black bg-red-600 w-full rounded-xl hover:bg-black hover:text-white transition-all duration-300 p-2 font-semibold hover:scale-105"
    //           >
    //             Login
    //           </Link>
    //           <Link
    //             href={"/register"}
    //             className="flex items-center justify-center border w-full rounded-xl bg-red-600 hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-white p-2 font-semibold hover:scale-105"
    //           >
    //             Register
    //           </Link>
    //         </div>
    //       ) : (
    //         <div className="flex flex-col mt-6 text-base items-center gap-1 cursor-pointer">
    //           <div className="flex items-center justify-center border w-full rounded-xl bg-red-600 hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-white font-semibold hover:scale-105">
    //             <MenuItem
    //               onClick={() => {
    //                 signOut();
    //               }}
    //             >
    //               Logout
    //             </MenuItem>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </>
  );
};

export default SideBar;
