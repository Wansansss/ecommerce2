import { getSession } from "@/actions/getCurrentUser";
import Button from "@/components/utils/Button";
import Heading from "@/components/utils/Heading";
import { getAccountDetail } from "@/libs/api";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const Dashboard = async () => {
  const user = await getSession()
  const currentUser = await getAccountDetail(user?.secureId);
  console.log(currentUser);

  return (
    <div className="py-16">
      <div className="py-12 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
        <FaUserCircle size={100} />
        {currentUser?.data.address === null ?(
          <div className="px-4 items-center justify-center text-3xl font-bold text-black">
          Welcome,{currentUser?.data.fullName}
        </div>
        ):(
<div className="px-4 items-center justify-center text-3xl font-bold text-black">
          Welcome,{currentUser?.data.accountName}
        </div>
        )}
        
      </div>
      <div className="flex flex-col px-24 gap-2 text-xl font-bold text-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
          {currentUser?.data.address === null ? (
            <Link href="/user/formAlamat">
              <Button custom="max-w-[250px]" label={"Lengkapi Alamat"} />
            </Link>
          ) : (
            <Link href="/user/dashboard/alamat">
              <Button custom="max-w-[250px]" label={"Edit Alamat"} />
            </Link>
          )}
        </div>
        <Link
          href="/user/dashboard/historyTransaksi"
          className="flex flex-row items-center justify-center gap-2"
        >
          <Button custom="max-w-[250px]" label="Histori Transaksi" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
