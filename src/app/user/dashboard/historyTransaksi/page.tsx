'use client'
import Heading from "@/components/utils/Heading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const UserCard = () => {
  const [fullName,setfullName]= useState('')
  const router = useRouter();

  useEffect(() => {
    let fullName:any = sessionStorage.getItem("fullName");
    setfullName(fullName);
    if(!fullName){
      router.push('/login')
    }
  }, [fullName,router]);



  return (
    <div className="py-16">
      <div className="py-12 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
        <FaUserCircle size={100} />
        <div className="px-4 items-center justify-center text-3xl font-bold text-black">
          Welcome,{fullName}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-24 gap-2 text-xl font-bold text-black">
        <Heading title="HISTORI TRANSAKSI" />
       
        <Link href="/user/dashboard" className="flex flex-row items-center justify-center gap-2">
            <IoMdArrowRoundBack />
            <h1 className="font-bold text-lg">Back</h1>
          </Link>
      </div>
      
    </div>
  );
};

export default UserCard;
