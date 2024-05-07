import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getProduct } from "@/libs/api";
import React from "react";
import Filter from "@/components/utils/Filter";

const Page = async ({ params }: any) => {
  const id = params.id;
  const data = await getProduct("/category/list", `categorySecureId=${id}`);
  const filter = await getProduct("/filter",'')

  if (data.status !== "OK") {
    return <NotFound title="Product Tidak Ditemukan..." />;
  }
  return (
    <Container>
      <div className="pt-44 font-bold">
        <div className="">
          <div className="h-full">
            <Heading title="Filter Product" />
            <Filter />
          </div>
          <div>
            <div className="px-4 w-full">
              <Heading title="Product" />
              <hr className="h-1 bg-red-600" />
            </div>
            <ProductCard list={data} />
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Page;
