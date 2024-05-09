"use client";

import Container from "@/components/utils/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import ProductCard from "@/components/utils/products/ProductCard";
import Heading from "@/components/utils/Heading";

type Props = {};

const FilterPage = (props: Props) => {
  const [price, setPrice] = useState({
    rangeFrom: 0,
    rangeTo: 0,
  });
  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("/api/filterProduct", {
            params: {
              price: {
                rangeFrom: price.rangeFrom,
                rangeTo: price.rangeTo,
              },
            },
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Response: " + response.data);
            setResponse(response.data);
          });
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchData();
  }, [price]);
  return (
    <Container>
      <div className="py-16">
        <div className=" py-16">
          <Heading title="Filter" />
          <Filter price={price} setPrice={setPrice} />
          <Heading title="Produk Pilihan" />
          <ProductCard list={response} />
        </div>
        <div className="px-10">
          
        </div>
      </div>
    </Container>
  );
};

export default FilterPage;
