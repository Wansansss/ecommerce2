/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { MdClose, MdMenu } from "react-icons/md";
import BackDrop from "./BackDrop";
import axios from "axios";
import { PiCaretDown } from "react-icons/pi";
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
    link: "/product/promo",
  },
  {
    label: "Kontak",
    link: "/contact",
  },
  {
    label: "Kategori Produk",
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
];

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const [kategori, setKategori] = useState<any>(['']);

  function getKategori() {
    axios
      .get(
        process.env.NEXT_PUBLIC_API_URL + `/api/sl/v1/web/product-category/list`
      )
      .then((response) => {
        // console.log(response)
        setKategori(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(getKategori, []);


  return (
    <div className="flex flex-row items-center justify-center px-4">
      <div
        className={
          menuOpen
            ? "flex flex-col items-start gap-y-2 fixed top-20 right-8 p-8 bg-white rounded-3xl shadow-md w-64 transition-all duration-300 z-50"
            : "flex flex-col items-start gap-y-2 fixed top-20 p-8 bg-white rounded-3xl shadow-md w-64 transition-all duration-300 z-50 -right-[100%]"
        }
      >
        <InputSearch />
         {navItems.map((link, i) => (
        <div key={i} className="relative group px-2 py-3 transition-all">
          <div className="flex cursor-pointer items-center gap-2 group-hover:text-red-600 transition-all duration-500">
            <Link href={link.link ?? "/"}>{link.label}</Link>

            {link.children && (
              <PiCaretDown className=" rotate-180 transition-all duration-500 group-hover:rotate-0" />
            )}
          </div>
          {/* dropdown */}

          {link.children && (
            <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 bg-white py-3 px-6 shadow-md transition-all duration-500 group-hover:flex">
              {kategori?.map((ch: any, index: any) => (
                <Link
                  key={index}
                  href={`/product/kategori/${ch.categorySecureId}`}
                  className="flex cursor-pointer py-1 pl-6 pr-8 text-black/90 hover:text-red-600"
                >
                  <ul className="list-disc hover:list-none">
                    <li>{ch.categoryName}</li>
                  </ul>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
      <div
        className="md:hidden xl:hidden cursor-pointer text-3xl hover:text-red-600 transition-all"
        onClick={handleNav}
      >
        {!menuOpen ? <MdMenu /> : <MdClose />}
      </div>
      <div className="px-2 md:hidden xl:hidden">
        <CartCount />
      </div>
      <div className="px-2 md:hidden xl:hidden">
        <UserMenu />
      </div>
      {menuOpen ? <BackDrop onClick={handleNav} /> : null}
    </div>
  );
};

export default SideBar;
