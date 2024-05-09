"use client";

import React, { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Avatar from "../utils/Avatar";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: any;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
          p-2 border-[1px]
        border-slate-500 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-lg transition-all text-slate-600 hover:text-red-600"
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-lg shadow-black w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <Link
                  href="/user/dashboard/historyTransaksi"
                  className="hover:text-red-600"
                >
                  <MenuItem onClick={toggleOpen}> Your Orders </MenuItem>
                </Link>
                <Link href="/user/dashboard" className="hover:text-red-600">
                  <MenuItem onClick={toggleOpen}>Dashboard </MenuItem>
                </Link>
                {/* <Link href="/login" className="hover:text-red-600"> */}
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut({ callbackUrl: "/login" });
                  }}
                >
                  Logout
                </MenuItem>
                {/* </Link> */}
              </div>
            ) : (
              <div>
                <Link href="/login" className="hover:text-red-600">
                  <MenuItem onClick={toggleOpen}> Login </MenuItem>
                </Link>
                <Link href="/register" className="hover:text-red-600">
                  <MenuItem onClick={toggleOpen}> Register </MenuItem>
                </Link>
              </div>
            )}
            
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
