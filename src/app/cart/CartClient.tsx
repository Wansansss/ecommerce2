"use client";

import Button from "@/components/utils/Button";
import Heading from "@/components/utils/Heading";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/libs/formatPrice";

const CartClient = () => {
  const { cartProducts,handleClearCart,cartTotalAmount } = useCart();

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
      <Heading title="Keranjang Anda" center />
      <div className="grid grid-cols-5 sm:text-xs md:text-md md:gap-4 pb-2 mt-8 items-center">
        <div className="col-span-2 justify-self-start">Produk</div>
        <div className="justify-self-center">Harga</div>
        <div className="justify-self-center">Jumlah</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.productSecureId} item={item}/>
          })}
      </div>
      <div className="border-t-[1.5px] border-red-600 py-4 flex justify-between gap-4">
        <div className="w-[120px]">
          <Button label="Hapus Semua" onClick={() => handleClearCart()} small />
        </div>
        <div className="text-md flex flex-col gap-1 items-start">
          <div className="flex justify-between gap-8 w-full text-black font-bold">
            <span>Total Harga</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <Button label="Pesan Sekarang" onClick={() => {}}/>
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
