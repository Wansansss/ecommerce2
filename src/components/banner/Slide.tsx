import Image from "next/image";
import React from "react";
import Container from "../utils/Container";
import Link from "next/link";

interface propsType {
  img: string;
  title: string;
  // mainTitle: string;
  // price: string;
}


const Slide: React.FC<propsType> = ({ img, title }) => {
  return (
    <Container>
      <div className="outline-none border-none relative md:max-h-[300px] sm:max-h-[200px] lg:max-h-[300px]">
        <div className="absolute max-h-[200px] left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] gap-2">
          {/* <h3 className="text-black/80 text-[20px] lg:text-[24px]">{title}</h3> */}
          <h2 className="text-black text-[16px] md:text-[26px] lg:text-[40px] font-bold leading-[1.2] pb-4">
            {/* {title} */}
          </h2>

          <h3 className="text-[20px] text-gray-500">
            {/* starting at{" "} */}
            {/* <b className="text-[16px] md:text-[24px] lg:text-[26px]">{price}</b> */}
            {/* .00 */}
          </h3>
          {/* <Link href={"/product/promo"} className="bg-red-700 text-black text-[10px] md:text-[16px] p-1 px-2 rounded-lg inline-block cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            Beli Sekarang {">"}
          </Link> */}
        </div>

        <Image
          className="w-full max-h-[250px] sm:max-h-[300px] rounded-xl object-cover"
          src={img}
          alt="banner"
          width={1920}
          height={1080}
        />
      </div>
    </Container>
  );
};

export default Slide;
