"use client";

import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";



const FormAlamat = () => {
  const [currentUser,setCurrentUser] = useState<any>([''])
  const [isLoading, setisLoading] = useState(false);
  const [secureId,setSecureId] = useState('');
  const router = useRouter();
  useEffect(() =>{
    let fullName = sessionStorage.getItem('fullName')
    let secureId = sessionStorage.getItem('secureId')
    if(fullName && secureId){
      setSecureId(secureId)
    }
    if(!fullName){
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
     console.log(currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    values: {
      phoneNumber:currentUser?.phoneNumber,
      address:currentUser?.address?.address1,
      city: currentUser?.address?.city,
      village: currentUser?.address?.village,
      subDistrict:currentUser?.address?.subdistrict ,
      postalCode: currentUser?.address?.postalCode,
      province: currentUser?.address?.province,
    },
  });

  


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setisLoading(true);
    const config = {
      headers: {
        "x-user-secure-id" : secureId,
        "Content-Type": "application/json"
      },
    }
    await axios
      .put(process.env.NEXT_PUBLIC_API_URL +"/api/sl/v1/web/users/account", data,config)
      .then((response) => {
        toast.success(`Berhasil`)
        router.push('/user/dashboard')
    return response
      })
      .catch(() => toast.error("Gagal Update Alamat"))
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <>
      <Heading title="Lengkapi Alamat" />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="phoneNumber"
        label="No Handphone"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.phoneNumber}
      />
      <Input
        id="address"
        label="Nama Jalan"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.address?.address1}
      />

      <Input
        id="village"
        label="Kelurahan"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.address?.village}
      />
      <Input
        id="subDistrict"
        label="Kecamatan"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.address?.subdistrict}
      />
      <Input
        id="city"
        label="Kota"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.address?.city}
      />
      <Input
        id="province"
        label="Provinsi"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.address?.province}
      />
      <Input
        id="postalCode"
        label="Kode Pos"
        disabled={isLoading}
        register={register}
        errors={errors}
        value={currentUser?.address?.postalCode}
        type="number"
      />

      <Button
        label={isLoading ? "Loading" : "Submit"}
        onClick={handleSubmit(onSubmit)}
      />
      {/* <p className="text-sm">
        Do not have an account?{" "}
        <Link className="underline hover:text-red-500" href="/register">
          Sign Up
        </Link>
      </p> */}
    </>
  );
};

export default FormAlamat;
