"use client";
import Button from "@/components/utils/Button";
import Heading from "@/components/utils/Heading";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack, MdDone } from "react-icons/md";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/libs/formatPrice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import Modal from 'react-modal';
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const [loading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [secureId, setSecureId] = useState("");
  const router = useRouter();

  useEffect(() => {
    let secureId = sessionStorage.getItem("secureId");
    if (secureId) {
      setSecureId(secureId);
    }
  }, [router]);

  const handleClose = () => setIsModalOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleInvoice =  async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        userSecureId: secureId,
      },
    };

    await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/sl/v1/web/transaction/invoice/download?orderId=${orderId}`,
      config
    ).then((response) => {
      console.log(response);
      return response
    }).catch((error) => {
      console.log(error);
      return error
    })
  };

  const handleCheckout = async () => {
    if (cartProducts) {
      {
        cartProducts.map(async (item) => {
          await fetch(
            process.env.NEXT_PUBLIC_API_URL +
              "/api/sl/v1/web/transaction/check-out",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-user-secure-id": secureId,
              },
              body: JSON.stringify([
                {
                  productSecureId: item.productSecureId,
                  totalItemsPurchased: item.qty,
                },
              ]),
            }
          )
            .then(async (response) => {
              setIsLoading(true);
              if (response.status === 200) {
                const data = await response.json();
                toast.success("Pesanan Telah diterima");
                handleClearCart();
                setIsLoading(false);
                setOrderId(data.data[0].orderId);
                localStorage.setItem("orderId", data.data[0].orderId);
              } else if (response.status === 400) {
                const data = await response.json();
                toast(
                  (t) => (
                    <span className="flex flex-col">
                      {data.message}
                      <div className="flex flex-row gap-1">
                        <Link
                          href={"https://wa.me/6282137026688?text=Hallo Admin,"}
                          target="blank"
                          className="bg-green-600 p-2"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          OK
                        </Link>
                        <Link
                          href={"/cart"}
                          className="bg-red-600 p-2"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          Batal
                        </Link>
                      </div>
                    </span>
                  ),
                  {
                    icon: <MdDone size={20} />,
                  }
                );
                handleClearCart();
              } else if (response.status === 404) {
                const data = await response.json();
                toast.error(`${data.message}`);
              } else if (response.status === 500) {
                const data = await response.json();
                toast.error(`${data.message}`);
              }
            })
            .catch((error) => {
              console.log(error);
              toast.error("Terjadi Kesalahan");
            })
            .finally(() => {
              // handleClearCart();
            });
        });
      }
    }
  };

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className=" flex flex-col items-center mt-40 mx-8 mb-10">
        {orderId && (
          <Modal
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Informasi Pembayaran
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Silahkan lakukan pembayaran ke rekening berikut ini
                <div className="flex flex-row gap-2 pt-4 pb-4">
                  <Image
                    src="/assets/img/Bank_Central_Asia.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h1>647 058 2756 a.n LESTARI</h1>
                </div>
                Kemudian kirimkan bukti pembayaran melalui nomer WA Admin
                dibawah ini
                <div className="flex flex-row gap-2 pt-4 pb-4">
                  <Link
                    href={"https://wa.me/6281290844844?text=Hallo Admin,"}
                    target="blank"
                    className="font-medium"
                  >
                    <div className="flex">
                      <IoLogoWhatsapp
                        size={18}
                        className="text-green-600 rounded-xl"
                      />
                      <h1 className="pl-1">0812-9084-4844.</h1>
                    </div>

                    <h2 className="hover:text-red-600 transition-all duration-300 py-4">
                      Klik Disini
                    </h2>
                  </Link>
                  <div className="flex justify-center items-center mt-20 mx-auto">
                      <Button
                        label="Download Invoice"
                        small
                        onClick={() => handleInvoice()}
                      />
                    </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        )}
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
