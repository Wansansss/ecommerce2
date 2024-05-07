import { getSession } from "@/actions/getCurrentUser";
import Button from "@/components/utils/Button";
import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import Heading from "@/components/utils/Heading";
import { getAccountDetail } from "@/libs/api";
import { truncateText } from "@/libs/truncateText";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const UserCard = async () => {
  const session = await getSession();
  const currentUser = await getAccountDetail(session?.secureId);

  return (
    <Container>
      <div className="py-24 w-full">
        <div className="px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
          <FaUserCircle size={100} />
          <div className="px-4 items-center justify-center text-3xl font-bold text-black">
            Welcome,{currentUser.data.accountName}
          </div>
        </div>
        <FormWrap>
          <Heading title="ALAMAT ANDA" />
          <div className="w-full font-semibold">
            <div className="grid grid-cols-1 gap-4 break-all">
              <h1>
                Alamat: {currentUser.data.address.address1}
              </h1>
              <h1>Kelurahan: {currentUser.data.address.village}</h1>
              <h1>Kota: {currentUser.data.address.city}</h1>
              <h1>Kecamatan: {currentUser.data.address.subdistrict}</h1>
              <h1>Provinsi: {currentUser.data.address.province}</h1>
              <h1>Kode Pos: {currentUser.data.address.postalCode}</h1>
            </div>
          </div>
        </FormWrap>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
          <Link href="/user/formAlamat">
            <Button custom="max-w-[250px]" label={"Edit Alamat"} />
          </Link>
        </div>
        <Link
          href="/user/dashboard"
          className="flex flex-row items-center justify-center gap-2"
        >
          <IoMdArrowRoundBack />
          <h1 className="font-bold text-lg">Back</h1>
        </Link>
      </div>
    </Container>
  );
};

export default UserCard;
