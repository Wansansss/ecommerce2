"use client";

import { formatPrice } from "@/libs/formatPrice";
import { CartProductType } from "../product/[Id]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/libs/truncateText";
import Image from "next/image";
import SetQuantity from "@/components/utils/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyDecrease,
    handleCartQtyIncrease,
  } = useCart();

  return (
    <div className="grid grid-cols-5 border-t-[1.5px] border-red-600 items-center">
      <div className="col-span-1 justify-self-start ">
        <Link href={`/product/${item.productSecureId}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.productName}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between text-center">
          <Link href={`/product/${item.productSecureId}`}>
            {truncateText(item.productName)}
          </Link>
          <div className="w-[70px]">
            <button
              className="text-black hover:text-red-600 underline"
              onClick={() => handleRemoveProductFromCart(item)}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.amount)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyDecrease={() => handleCartQtyDecrease(item)}
          handleQtyIncrease={() => handleCartQtyIncrease(item)}
        />
      </div>
      <div className="col-span-2 justify-self-end font-bold">
        {formatPrice(item.amount * item.qty)}
      </div>
    </div>
  );
};

export default ItemContent;
