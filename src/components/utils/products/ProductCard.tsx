/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/libs/formatPrice";
import { truncateText } from "@/libs/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ list }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4 cursor-pointer">
      {list.data?.map((data: any) => (
        <Link
          key={data.productSecureId}
          href={`/product/${data.productSecureId}`}
          className="flex flex-col border hover:border-red-700 bg-rose-100 shadow shadow-black/60 rounded hover:scale-105 duration-300 transition-all w-[100%]"
        >
          <Image
            className="block items-center justify-center max-h-[200px] min-h-[200px] object-fill"
            width={1920}
            height={1080}
            src={data.fileUrlList[0]?.image}
            alt={data.productName}
          />
          <div className="py-2 pl-4 font-semibold">
            {truncateText(data.productName)}
          </div>
          <hr className="h-[2px] w-[90%] mx-auto bg-red-600" />
          <div className="pl-4">{truncateText(data.productDescription)}</div>
          <div className="pl-4">
            <Rating value={data.ratingByClick} readOnly />
          </div>
          {data.discount === 0 ? (
            <div className="font-semibold pl-4 py-3">
              <h1 className="text-md">{`${formatPrice(
                data.amount
              )}`}</h1>
            </div>
          ) : (
            <div className="font-semibold pl-4 py-3">
              <h1 className="text-md">{`${formatPrice(
                data.amountDiscount
              )}`}</h1>
              <div className="flex flex-row text-wrap">
                <h1 className="text-xs line-through text-gray-500">
                  {formatPrice(data.amount)}
                </h1>
                <h1 className="flex px-1 text-xs text-center text-red-600">
                  -{data.discount}%
                </h1>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
