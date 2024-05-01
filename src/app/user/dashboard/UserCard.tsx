import { getSession } from "@/actions/getCurrentUser";
import Button from "@/components/utils/Button";
import Heading from "@/components/utils/Heading";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
  currentUser: any;
}

const UserCard: React.FC<UserCardProps> = async ({ currentUser }) => {

  return (
    <div className="py-16">
      <div className="py-12 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
        <FaUserCircle size={100} />
        <div className="px-4 items-center justify-center text-3xl font-bold text-black">
          Welcome,{currentUser?.name}
        </div>
      </div>
      <div className="flex flex-col px-24 gap-2 text-xl font-bold text-black">
        <Heading title="ALAMAT LENGKAP" />
        <h1>Address: {currentUser.data.address}</h1>
        <h1>Village:</h1>
        <h1>City:</h1>
        <h1>subDistrict:</h1>
        <h1>postalCode:</h1>
        <h1>Province:</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
          <Link 
          href="/user"
          >
          <Button custom="max-w-[250px]" label={"Lengkapi Alamat"} />
          </Link>
         
          <Button custom="max-w-[250px]" label={"History Transaksi"} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
