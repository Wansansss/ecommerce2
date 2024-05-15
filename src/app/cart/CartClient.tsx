"use client";
import Button from "@/components/utils/Button";
import Heading from "@/components/utils/Heading";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/libs/formatPrice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";


const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const {data: session,status} = useSession()
  let secureId = ''
    if (session?.user?.secureId)
        secureId = session.user?.secureId

  const router = useRouter();

  const handleCheckout = async () => {
    if (cartProducts) {
      {
        cartProducts.map((item) => {
          setIsLoading(true);
          setError(error);
          fetch(process.env.NEXT_PUBLIC_API_URL + "/api/sl/v1/web/transaction/check-out",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-user-secure-id": secureId,
            },
            body: JSON.stringify({
              productSecureId: item.productSecureId,
              totalItemsPurchased: item.qty
            })
          })
            .then((response) => {
              setIsLoading(true);
              if (response.ok) {
                toast.success("Pesanan Telah diterima")
                // handleClearCart()
                setIsLoading(false)
                console.log(response)
                // router.push("https://wa.me/6282137026688?text=Hallo Admin,Apakah pesanan saya sudah diterima?")
              } else {
                toast.error("Silahkan Login terlebih dahulu");
                return router.push("/login");
              }
            })
            .catch((error) => {
              setError(true);
              console.log(error);
              toast.error("Terjadi Kesalahan");
            });
        });
      }
    }
  };

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className=" flex flex-col items-center mt-40 mx-8 mb-10">
        <div className="text-2xl">Tidak Ada Product</div>
        <div>
          <Link
            href={"/"}
            className="text-black flex items-center gap-1 mt-2 hover:text-red-600"
          >
            <MdArrowBack />
            <span>Belanja Sekarang</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Keranjang" center />
      <hr className="h-1 bg-red-600 max-w-[30%] mx-auto" />
      <div className="grid grid-cols-5 py-8 items-center">
        <div className="col-span-1 justify-start">Produk</div>
        <div className="col-span-1 justify-self-center">Harga</div>
        <div className="col-span-1 justify-self-center">Jumlah</div>
        <div className="col-span-2 justify-self-end">Total</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.productSecureId} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-red-600 py-4 flex justify-between gap-4">
        <div className="w-[80px] md:w-[120px]">
          <Button label="Hapus Semua" onClick={() => handleClearCart()} small />
        </div>
        <div className="text-md flex flex-col gap-1 items-start">
          <div className="flex justify-between gap-8 w-full text-black font-bold">
            <span>Total Harga</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <Button label="Pesan Sekarang" onClick={() => handleCheckout()} />
          <Link
            href={"/"}
            className="text-black flex items-center gap-1 mt-2 hover:text-red-600"
          >
            <MdArrowBack />
            <span>Lanjut Belanja</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
