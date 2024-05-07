import { getKategoriList, getProduct} from "@/libs/api";
import Hero from "../banner/Hero";
import ProductCard from "../utils/products/ProductCard";
import KategoriCard from "../utils/kategori/KategoriCard";
import Container from "../utils/Container";
import NotFound from "../utils/NotFound";

const Home = async () => {
  const data = await getProduct("/list");
  // console.log(products)
  const kategori = await getKategoriList();
  if(data.status !== "OK"){
      return <NotFound title="Data Tidak Ditemukan..." center/>
  }
  return (
    <div>
      <Container>
        <Hero />
        <KategoriCard kategori={kategori} />
        <ProductCard list={data} />
      </Container>
    </div>
  );
};

export default Home;
