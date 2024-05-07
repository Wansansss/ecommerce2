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
import { signIn } from "next-auth/react";


interface RegisterFormProps {
  currentUser: any
}

const RegisterForm: React.FC<RegisterFormProps> = ({currentUser}) => {
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
      password: "",
      role:["USER"],
    },
  });

  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setisLoading(true);
    await axios
      .post("/api/signup",data)
      .then(() => {
    signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/login");
        router.refresh();
        toast.success("Berhasil Mendaftar");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
    })
    .catch(() => toast.error("Gagal Mendaftar"))
    .finally(() => {
      setisLoading(false);
    });
  };
  if (currentUser) {
    return <p className="text-center">Anda Sudah Login...</p>;
  }
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
        id="email"
        label="Email"
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
