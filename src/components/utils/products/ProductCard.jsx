import { formatPrice } from "@/libs/formatPrice";
import { truncateText } from "@/libs/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const ProductCard = ({ list }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 p-6 m-5 cursor-pointer">
        {list.data?.map((data) => (
          <Link
            key={data.productSecureId}
            href={`product/${data.productSecureId}`}
            className="flex flex-col items-center justify-center border border-black max-h-[200px] max-w-[400px]"
          >
            <Image
              className="block items-center justify-center max-h-[80%] max-w-[100%] object-fill border border-white p-2"
              src={data.fileUrlListed}
              alt={data.productName}
              width={100}
              height={100}
            />
            <div className="mt-4 text-center">
              {truncateText(data.productName)}
            </div>
            <div className="mt-4 text-center">
              {truncateText(data.productDescription)}
            </div>
            <div>
              <Rating value={data.productRating} readOnly />
            </div>
            <div className=" font-semibold">{formatPrice(data.amount)}</div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductCard;
