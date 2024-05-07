"use client";

import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";

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

    useEffect(()=> {
      if(!currentUser){
        router.push("/login");
        router.refresh();
      }
    },[])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setisLoading(true);
    await axios
      .put("/api/user", data)
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
  if (!currentUser) {
    return <p className="text-center">Silahkan Login Terlebih Dahulu</p>;
  }

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
