"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import React, { useState } from "react";

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
    label: "Contact Us",
    link: "/contact",
  },
];

const SingleNav = (link: NavItem) => {
  const [isItemOpen, setItem] = useState(false);
  const [animationParent] = useAutoAnimate();

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
      </div>
    </Link>
  );
};

export default SingleNav;
