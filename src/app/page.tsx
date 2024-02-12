
import Hero from "./components/banner/Hero";
import Container from "./components/Container";
import { products } from "./utils/products";
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <div>
      <Container>
        <div>
          <Hero />
        </div>
        <div className="m-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any, i) => {
            return <ProductCard data={product} key={i} />;
          })}
        </div>
      </Container>
    </div>
  );
}
