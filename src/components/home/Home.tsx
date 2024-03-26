import { getKategoriList, getProductList } from "@/libs/api";
import Hero from "../banner/Hero";
import ProductCard from "../utils/products/ProductCard";
import KategoriCard from "../utils/kategori/KategoriCard";
import Container from "../utils/Container";

const Home = async () => {
  const products = await getProductList();
  const kategori = await getKategoriList();
  return (
    <div>
      <Container>
        <Hero />
        <KategoriCard kategori={kategori} />
        <ProductCard list={products} />
      </Container>
    </div>
  );
};

export default Home;
