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

interface LoginFormProps{
  currentUser: any
}

const LoginForm : React.FC<LoginFormProps> = ({currentUser}) => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
   defaultValues:{
    username:"",
    password:"",
   }
  });

  const router = useRouter();

  useEffect(()=> {
    if(currentUser){
      router.push("/");
      router.refresh();
    }
  },[])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
      signIn("credentials", {
      ...data,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/");
          router.refresh();
          toast.success("Berhasil Login");
        }
        if (callback?.error) {
          toast.error(callback.error);
        }
      }).catch(() => toast.error("Gagal Login"))
    .finally(() => {
      setisLoading(false);
    });
  };

  if(currentUser){
    return <p className="text-center">Anda Sudah Login...</p>
  }
  return (
    <>
      <Heading title="Sign in to Sinar Lestari" />
      <Button
      outline
      label="Continue With Google"
      icon={AiOutlineGoogle}
      onClick={() => {}}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="username"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Do not have an account?{" "}
        <Link className="underline hover:text-red-500" href="/register">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
