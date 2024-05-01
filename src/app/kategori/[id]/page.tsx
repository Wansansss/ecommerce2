import ProductCard from "@/components/utils/products/ProductCard";
import { getKategoriDetail } from "@/libs/api";
import React from "react";

const Page = async ({ params }: any) => {
  const data = await getKategoriDetail(`page=1&categorySecureId=${params.id}`);
  // console.log(data)
  return (
    <div className="pt-44 px-10 font-bold">
      {data.data?.map((list: any, i: any) => {
        return (
          <div key={i}>
            <h1>Kategori: {list.categoryName}</h1>
            <hr className="bg-red-600 h-2" />
            <ProductCard list={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
