"use client";

import { useState } from "react";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/utils/Button";
import Link from "next/link";

const LoginForm = () => {
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

  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    console.log(data);
    console.log("test")
  };
  return (
    <>
      <Heading title="Sign in to Sinar Lestari" />
      <hr className="bg-slate-300 w-full h-px" />
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
