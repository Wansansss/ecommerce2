"use client";
import Button from "@/components/utils/Button";
import Heading from "@/components/utils/Heading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "@/components/utils/Container";
import FormWrap from "@/components/utils/FormWrap";
import { formatPrice } from "@/libs/formatPrice";

const History = () => {
  const [fullName, setfullName] = useState("");
  const [secureId, setSecureId] = useState("");
  const [transaksi, setTransaksi] = useState<any>([""]);
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  useEffect(() => {
    let fullName: any = sessionStorage.getItem("fullName");
    let secureId: any = sessionStorage.getItem("secureId");
    let orderId: any = localStorage.getItem("orderId");
    setOrderId(orderId);
    setfullName(fullName);
    setSecureId(secureId);
    if (!fullName) {
      router.push("/login");
    }
  }, [fullName, router]);
  // let transaksi = ['']
  function getHistory() {
    const config = {
      headers: {
        userSecureId: secureId,
        accept: "*/*",
      },
    };
    axios
      .get(
        process.env.NEXT_PUBLIC_API_URL + "/api/sl/v1/web/transaction/history",
        config
      )
      .then((response) => {
        // transaksi = response.data.data
        setTransaksi(response.data.data);

        // return transaksi
      })
      .catch((response) => {
        // toast.error(`${response.response.data.message}`);
        // setHistory(response.response.data.message)
      });
  }
  useEffect(getHistory, [secureId]);
  console.log(transaksi);
  const handleInvoice = async () => {
    const config = {
      responseType: "arraybuffer" as any,
      headers: {
        userSecureId: secureId,
      },
    };

    await axios
      .get(
        process.env.NEXT_PUBLIC_API_URL +
          `/api/sl/v1/web/transaction/invoice/download?orderId=${orderId}`,
        config
      )
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `invoice_order_${orderId}.pdf`);
        document.body.appendChild(link);
        link.click();
        // URL.revokeObjectURL(url);
        // return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    // <div className="py-16">
    //   <div className="py-12 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
    //     <FaUserCircle size={100} />
    //     <div className="px-4 items-center justify-center text-3xl font-bold text-black">
    //       Welcome,{fullName}
    //     </div>
    //   </div>
    //   <div className="flex flex-col px-24 gap-2 text-xl font-bold text-black">
    //     <Heading title="HISTORI TRANSAKSI" center />
    //     <hr className="h-1 bg-red-600 max-w-[30%] mx-auto" />
    //     {history !== "" ? (
    //       <table className="table-auto">
    //         <thead>
    //           <tr>
    //             <th>OrderId</th>
    //             <th>Nama Produk</th>
    //             <th>Kategori</th>
    //             <th>Harga</th>
    //             <th>Status Pembayaran</th>
    //             <th>Status Transaksi</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {history.map((item:any, index:any) =>{
    //             return (
    //               <tr key={index}>
    //                 <td>{item.orderId}</td>
    //                 <td>{item.productName}</td>
    //                 <td>{item.categoryName}</td>
    //                 <td>{item.paymentAmount}</td>
    //                 <td>{item.paymentStatus}</td>
    //                 <td>{item.transactionStatus}</td>
    //               </tr>
    //             )
    //           })}
    //         </tbody>
    //       </table>
    //     ) : (
    //       ""
    //     )}
    //   </div>

    //   <Link
    //     href="/user/dashboard"
    //     className="flex flex-row items-center justify-center gap-2"
    //   >
    //     <IoMdArrowRoundBack />
    //     <h1 className="font-bold text-lg">Back</h1>
    //   </Link>
    // </div>
    <Container>
      <div className="pt-28 px-8 flex md:flex-col items-center justify-center gap-4 text-slate-500 border-slate-500">
        <FaUserCircle size={100} />
        <div className="px-4 items-center justify-center text-3xl font-bold text-black">
          Welcome,{fullName}
        </div>
      </div>
      {transaksi !== "" ? (
        <>
          {transaksi?.map((data: any, index: any) => {
            return (
              <div key={index} className="w-full">
                <FormWrap>
                  <Heading title="HISTORY TRANSAKSI" />
                  <div className="w-full font-semibold">
                    <div className="grid grid-cols-1 gap-4 break-all">
                      <h1>orderId: {data.orderId}</h1>
                      <h1>Nama Produk: {data.productName} </h1>
                      <h1>Kategori: {data.categoryName} </h1>
                      <h1>Harga: {formatPrice(data.paymentAmount)} </h1>
                      <h1>Status Pembayaran: {data.statusPayment} </h1>
                      <h1>Status: {data.statusOrder} </h1>
                      <Button
                        label="Download Invoice"
                        small
                        onClick={handleInvoice}
                      />
                    </div>
                  </div>
                </FormWrap>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <Heading title="HISTORY TRANSAKSI" center />
          <div className="flex text-center justify-center">
            Tidak Ada Transaksi
          </div>
        </>
      )}

      <Link
        href="/user/dashboard"
        className="flex flex-row items-center justify-center gap-2 py-2"
      >
        <IoMdArrowRoundBack />
        <h1 className="font-bold text-lg">Back</h1>
      </Link>
    </Container>
  );
};

export default History;
