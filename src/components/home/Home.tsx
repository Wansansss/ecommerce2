import { getKategoriList, getProduct } from "@/libs/api";
import Hero from "../banner/Hero";
import ProductCard from "../utils/products/ProductCard";
import KategoriCard from "../utils/kategori/KategoriCard";
import Container from "../utils/Container";
import NotFound from "../utils/NotFound";
import Heading from "../utils/Heading";
import Filter from "../../app/product/kategori/filters/Filter";
import FilterPage from "../../app/product/kategori/filters/page";

const Home = async () => {
  const rangeFrom = 1000;
  const data = await getProduct("/list");
  const kategori = await getKategoriList();
  if (data.status !== "OK") {
    return <NotFound title="Data Tidak Ditemukan..." center />;
  }
  return (
    <div>
      <Container>
        <Hero />

        <div className="py-16">
          <KategoriCard kategori={kategori} />
          <FilterPage/>
          <Heading title="Semua Produk" />
          <hr className="h-1 w-full bg-red-600" />
          <ProductCard list={data} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
