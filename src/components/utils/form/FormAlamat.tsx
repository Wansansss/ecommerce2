"use client";

import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../inputusers/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
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

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      router.refresh();
    }
  }, []);

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
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="address"
        label="Nama Jalan"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="village"
        label="Kelurahan"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="subDistrict"
        label="Kecamatan"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="city"
        label="Kota"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="province"
        label="Provinsi"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="postalCode"
        label="Kode Pos"
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
