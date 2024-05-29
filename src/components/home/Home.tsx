import { getKategoriList, getProduct } from "@/libs/api";
import Hero from "../banner/Hero";
import ProductCard from "../utils/products/ProductCard";
import KategoriCard from "../utils/kategori/KategoriCard";
import Container from "../utils/Container";
import NotFound from "../utils/NotFound";
import Heading from "../utils/Heading";
import Link from "next/link";
import { BsSliders2Vertical } from "react-icons/bs";

const Home = async () => {
  const data = await getProduct("/list");
  console.log(data)
  const kategori = await getKategoriList();
  if (data.status !== "OK") {
    return <NotFound title="Data Tidak Ditemukan..." center />;
  }
  return (

      <Container>
        <Hero />
        <div className="py-16">
          <KategoriCard kategori={kategori} />
          <div className="flex justify-between px-4">
            <Heading title="Semua Produk" />
            <Link
              href={"product/filters"}
              className="flex items-center justify-center gap-1"
            >
              <Heading title="Filter"  />
              <BsSliders2Vertical size={20} />
            </Link>
          </div>

          <hr className="h-1 w-full bg-red-600" />
          <ProductCard list={data} />
        </div>
      </Container>
  );
};

export default Home;
