'use client'
import Button from "@/components/utils/Button";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [fullName, setfullName] = useState(null);
  const [secureId, setSecureId] = useState('')
  const [currentUser, setCurrentUser] = useState<any>([])
  const router = useRouter();
  useEffect(() => {
    let fullName:any = sessionStorage.getItem("fullName");
    let secureId:any = sessionStorage.getItem("secureId");
    setfullName(fullName);
    if(secureId){
      setSecureId(secureId)
    }
    if(!fullName){
      router.push('/login')
    }
  }, [fullName,router]);

  

  

    function getAccountDetail(){
      
      const config = {
        headers: {
          "x-user-secure-id": secureId,
          "accept": "*/*"
        },
      }
         axios.get(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/web/users/account/detail`,config)
        .then((response) =>{
          console.log(response)
          setCurrentUser(response.data.data.address)
        }).catch((err) =>{console.log(err)});
      }
       useEffect(getAccountDetail,[secureId])

  return (
    <div className="py-16">
      <div className="py-12 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
        <FaUserCircle size={100} />
        <div className="px-4 items-center justify-center text-3xl font-bold text-black">
          Welcome,{fullName}
        </div>
      </div>
      <div className="flex flex-col px-24 gap-2 text-xl font-bold text-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
          {!currentUser ? (
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
