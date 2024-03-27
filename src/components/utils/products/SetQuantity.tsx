"use client";

import { CartProductType } from "@/app/product/[Id]/ProductDetails";
import React from "react";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2] border-slate-300 px-2 rounded shadow-lg"

const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return <div className="flex gap-8 items-center">
    {cartCounter ? null : <div className="font-semibold">Jumlah: </div>}
    <div className="flex gap-4 items-center text-black">
        <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
        <div>{cartProduct.qty}</div>
        <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
    </div>
  </div>;
};

export default SetQuantity;
