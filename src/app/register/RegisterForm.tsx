"use client";

import { useState } from "react";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/utils/Button";
import Link from "next/link";

const RegisterForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    console.log(data);
    console.log("test")
  };
  return (
    <>
      <Heading title="Sign Up" />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Nama"
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
        id="alamat"
        label="Alamat Lengkap"
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
