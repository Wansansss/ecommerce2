import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getKategoriDetail } from "@/libs/api";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: any) => {
  const data = await getKategoriDetail(`page=1&categorySecureId=${params.id}`);
  if(data.status !== "OK") {
    return (
      <NotFound title="Product Tidak Ditemukan..."/>
    )
  } 
    return (
      <>
        <div className="pt-44 font-bold">
          {data.data?.map((list: any, i: any) => {
            return (
              <div key={i}>
                <h1>Kategori: {list.categoryName}</h1>
                <hr className="bg-red-600 h-2" />
              </div>
            );
          })}
        </div>
        {/* <div className="flex flex-row justify-between py-10 px-10">
          <div className="flex flex-col px-10">
              <h6 className="font-bold">Product Kategori</h6>
            <div className="">
  
            </div>
          </div> */}
          
          <div>
            <ProductCard list={data} />
          </div>
        {/* </div> */}
      </>
    )

  
};

export default Page;
