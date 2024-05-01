"use client";

import React, { useEffect, useState } from "react";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/utils/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";
import { SafeUser } from "@/types";
import axios from "axios";
import { headers } from "next/headers";
import { User } from "next-auth";

interface FormAlamatProps {
  currentUser: any;
}

const FormAlamat: React.FC<FormAlamatProps> = ({ currentUser }) => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      address: " ",
      city: " ",
      village: " ",
      subDistrict: " ",
      postalCode: " ",
      province: "",
    },
  });

  const router = useRouter();

  //   useEffect(()=> {
  //     if(currentUser){
  //       router.push("/");
  //       router.refresh();
  //     }
  //   },[])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setisLoading(true);
    // const url = "http://89.116.134.204:8011/api/sl/v1/web/users/account"

    // const res = await fetch(url,{
    //     method:"POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // })
    // if(res.ok) {
    //     router.push("/user/dashboard");
    //     router.refresh();
    //     toast.success("Berhasil Update Alamat");
    //     setisLoading(false);
    // } else {
    //     toast.error("Gagal Update Alamat");
    //     setisLoading(false);
    // }
   


    await axios
    .put("/api/user",data)
    .then((callback) => {
    if (callback.status === 200) {
      router.push("/user/dashboard");
      router.refresh();
      toast.success("Berhasil");
      setisLoading(false);
    } else {
        toast.error("Gagal Update Alamat");
        setisLoading(false);
    }
  })
  .catch(() => toast.error("Gagal Update Alamat"))
  .finally(() => {
    setisLoading(false);
  });
  };

  return (
    <>
      <Heading title="Lengkapi Alamat" />
      <hr className="bg-red-600 w-full h-2" />
      <Input
        id="address"
        label="Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="city"
        label="City"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="village"
        label="Village"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="subDistrict"
        label="SubDistrict"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="postalCode"
        label="Postal Code"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="province"
        label="Province"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
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
