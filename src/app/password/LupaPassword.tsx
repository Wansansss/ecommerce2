"use client";

import React, { useEffect, useState } from "react";
import Heading from "../../components/utils/Heading";
import Input from "../../components/utils/inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/utils/Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";



const LupaPasswordForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
   defaultValues:{
    username:"",
    email:"",
    newPassword:"",
   }
  });

  const router = useRouter();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/sl/v1/web/users/forgotPassword', data
    ).then((response) => {
      setisLoading(false);
      console.log(response);
      toast.success(`${response.data.message}`)
    }).catch((response)=>{
      toast.error(`${response.response.data.message}`)
      setisLoading(false);
    }).finally(()=>{
      router.push('/login')
    })
    
  };
  return (
    <>
      <Heading title="Lupa Password" />
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
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="newPassword"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Simpan"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default LupaPasswordForm;
