"use client";

import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps{
    data: any
}

const ProductCard:React.FC<ProductCardProps>= ({data}) => {
  const router = useRouter()

  const productRating = 
  data.reviews.reduce((acc: number, item: any) =>
  item.rating + acc, 0
  ) / data.reviews.length

    return (
    <div
      onClick={() => router.push(`product/${data.id}`)}
      className=" 
      col-span-1 
      cursor-pointer 
      border-[2px] 
      bg-slate-50
      hover:text-red-600 
      hover:border-red-600
      rounded-sm 
      p-2 
      transition hover:scale-110 
      text-center 
      text-sm
    "
    >
      <div className="
      flex
      flex-col
      items-center
      w-full
      gap-1

      ">
        <div className=" aspect-square overflow-hidden relative w-full">
            <Image
            className="w-full h-auto object-contain"
            src={data.images[0].image}
            alt={data.name}
            fill
            sizes={"fill"}
   
            />
        </div>
        <div className="mt-4">
            {truncateText(data.name)}
        </div>
        <div><Rating value={productRating} readOnly/></div>
        <div>{data.reviews.length} reviews</div>
        <div className=" font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
