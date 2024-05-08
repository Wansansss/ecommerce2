import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import NotFound from "@/components/utils/NotFound";
import ProductCard from "@/components/utils/products/ProductCard";
import { getProduct } from "@/libs/api";
import React from "react";

const Page = async ({ params }: any) => {
  const id = params.id;
  const data = await getProduct("/category/list", `categorySecureId=${id}`);

  if (data.status !== "OK") {
    return <NotFound title="Product Tidak Ditemukan..." />;
  }
  return (
    <Container>
      <div className="py-16">
            <div className="py-16">
              <Heading title="Pilihan Produk" center />
              <hr className="h-1 bg-red-600 max-w-[50%] mx-auto" />
            </div>
            <ProductCard list={data} />
          </div>
    </Container>
  );
};

export default Page;
