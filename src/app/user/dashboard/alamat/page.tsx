'use client'
import Button from "@/components/utils/Button";
import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import Heading from "@/components/utils/Heading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const UserCard = () => {
  const [secureId,setSecureId] = useState('')
  const [currentUser,setCurrentUser] = useState<any>([])
  const router = useRouter()
  useEffect(()=> {
    let usersecureId = sessionStorage.getItem('secureId');
    if(usersecureId){
      setSecureId(usersecureId)
    }else{
      router.push('/login')
    }
  },[router])

 

  function getAccountDetail(){
    const config = {
      headers: {
        "x-user-secure-id": secureId as string,
        "accept": "*/*"
      },
    }
       axios.get(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/web/users/account/detail`,config)
      .then((response) =>{
        console.log(response)
        setCurrentUser(response.data.data)
      }).catch((err) =>{console.log(err)});
    }
     useEffect(getAccountDetail,[secureId])



  return (
    <Container>
      <div className="py-24 w-full">
        <div className="py-4 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
          <FaUserCircle size={100} />
          <div className="px-4 items-center justify-center text-3xl font-bold text-black">
            Welcome,{currentUser?.accountName}
          </div>
        </div>
        <FormWrap>
          <Heading title="ALAMAT PENGIRIMAN" />
          <div className="w-full font-semibold">
            <div className="grid grid-cols-1 gap-4 break-all">
              <h1>No Handphone: {currentUser?.phoneNumber}</h1>
              <h1>
                Alamat: {currentUser?.address?.address1}
              </h1>
              <h1>Kelurahan: {currentUser?.address?.village}</h1>
              <h1>Kota: {currentUser?.address?.city}</h1>
              <h1>Kecamatan: {currentUser?.address?.subdistrict}</h1>
              <h1>Provinsi: {currentUser?.address?.province}</h1>
              <h1>Kode Pos: {currentUser?.address?.postalCode}</h1>
            </div>
          </div>
        </FormWrap>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
          <Link href="/user/formAlamat">
            <Button custom="max-w-[250px]" label={"Edit Alamat"} />
          </Link>
        </div>
        <Link
          href="/user/dashboard"
          className="flex flex-row items-center justify-center gap-2"
        >
          <IoMdArrowRoundBack />
          <h1 className="font-bold text-lg">Back</h1>
        </Link>
      </div>
    </Container>
  );
};

export default UserCard;
