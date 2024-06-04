"use client";

import React, { useEffect, useState } from "react";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/utils/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    const fullName: any = [];
    const userSecureId: any = [];
    const token: any = [];
    axios
      .post(
        process.env.NEXT_PUBLIC_API_URL + "/api/sl/v1/web/users/signin",
        data
      )
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          fullName.push(response.data.data.fullName);
          userSecureId.push(response.data.data.userSecureId);
          token.push(response.data.data.token);
          sessionStorage.setItem("fullName", fullName);
          sessionStorage.setItem("secureId", userSecureId);
          sessionStorage.setItem("token", token);
          toast.success("Berhasil Login");
          router.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((response) => {
        toast.error(`${response.response.data.message}`);
        setisLoading(false);
      })
  };
  return (
    <>
      <Heading title="Sign in to Sinar Lestari" />
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
      <p className="text-sm text-start justify-start">
        <Link href={"/password"} className="underline hover:text-red-600">
          Lupa Password
        </Link>
      </p>
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
