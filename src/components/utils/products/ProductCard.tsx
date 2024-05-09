import { formatPrice } from "@/libs/formatPrice";
import { truncateText } from "@/libs/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { AiFillThunderbolt } from "react-icons/ai";

const ProductCard = ({ list }: any) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4 cursor-pointer">
        {list.data?.map((data: any) => (
          <Link
            key={data.productSecureId}
            href={`/product/${data.productSecureId}`}
            className="flex flex-col bg-slate-200 shadow-sm shadow-black rounded hover:scale-105 duration-300 transition-all "
          >
            <Image
              className="block items-center justify-center max-h-[200px] max-w-[100%] object-cover"
              src={data.fileUrlList[0].image}
              alt={data.productName}
              width={500}
              height={200}
            />
            <div className="text-center font-semibold">
              {truncateText(data.productName)}
            </div>
            <div className="text-center">
              {truncateText(data.productDescription)}
            </div>
            <div className="text-center">
              <Rating value={data.productRating} readOnly size="small" />
            </div>
            <div className="text-center font-semibold">
              <h1 className="text-lg">{formatPrice(data.amountDiscount)}</h1>
              <div className="flex flex-row text-center justify-center">
                <h1 className="text-md line-through text-red-600">
                  {formatPrice(data.amount)}
                </h1>
                <h1 className="flex px-1 text-sm text-center text-red-600">
                 -{data.discount}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductCard;
