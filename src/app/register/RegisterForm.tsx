"use client";

import React, { useEffect, useState } from "react";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/inputusers/Input";
import Button from "../../components/utils/Button";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";





const RegisterForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      phoneNumber:"",
      password: "",
      role:["USER"],
    },
  });

  const router = useRouter();
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setisLoading(true);
    await axios.post(
      process.env.NEXT_PUBLIC_API_URL +'/api/sl/v1/web/users/signup',data)
      .then((response) => {
        toast.success('Register Berhasil')
        router.refresh()
        router.push("/login");
        return response
      })
    .catch((response) => {
      toast.error(`${response.response.data.message}`)})
    .finally(() => {
      setisLoading(false);
    });
  };
  return (
    <>
      <Heading title="Sign Up For Sinar Lestari" />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="fullName"
        label="Nama Lengkap"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="username"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phoneNumber"
        label="No Handphone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="email"
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
        required
      />
      <Button
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Already have an account?{" "}
        <Link className="underline hover:text-red-500" href="/login">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
