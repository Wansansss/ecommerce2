import { formatPrice } from "@/libs/formatPrice";
import { truncateText } from "@/libs/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const ProductCard = ({ list }:any) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 p-4 cursor-pointer">
        {list.data?.map((data:any) => (
          <Link
            key={data.productSecureId}
            href={`/product/${data.productSecureId}`}
            className="flex flex-col items-center justify-center border border-black hover:border-red-600 max-h-[350px] max-w-[500px] "
          >
            <Image
              className="block items-center justify-center max-h-[50%] max-w-[100%] object-fill border border-white p-1"
              src={data.fileUrlList[0].image}
              alt={data.productName}
              width={100}
              height={100}
            />
            <div className="max-w-[90%] mt-4 text-center sm:text-md">
              {truncateText(data.productName)}
            </div>
            <div className=" max-w-[90%] mt-4 text-center">
              {truncateText(data.productDescription)}
            </div>
            <div className="text-center max-w-[100%] max-h-[50%] sm:text-md">
              <Rating value={data.productRating} readOnly size="small"/>
            </div>
            <div className="text-center justify-center font-semibold">{formatPrice(data.amount)}</div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductCard;
