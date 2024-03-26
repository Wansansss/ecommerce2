"use client"

import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import React, { useState } from "react";
import { PiCaretDown } from "react-icons/pi";

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

const SingleNav = (link: NavItem) => {
  const [isItemOpen, setItem] = useState(false);
  const [animationParent] = useAutoAnimate()

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
        ref={animationParent}
      onClick={toggleItem}
      href={link.link ?? "/"}
      className="relative px-2 py-3 transition-all"
    >
      <div className="flex cursor-pointer items-center gap-2 hover:text-red-600 transition-all duration-500">
        <div>{link.label}</div>
        {link.children && (
          <PiCaretDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
        )}
      </div>
      {/* dropdown */}
      {isItemOpen && link.children && (
        <span className="w-auto flex-col gap-1 bg-white py-3 transition-all duration-500 flex">
          {link.children.map((ch, index) => (
            <Link
              key={index}
              href={ch.link ?? "/"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-red-600"
            >
              <h1 className=" pl-3">{ch.label}</h1>
            </Link>
          ))}
        </span>
      )}
    </Link>
  );
};

export default SingleNav;
