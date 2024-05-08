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
    return
    fetchData();
  }, [price]);
console.log(price)
  return (
    <Container>
      <div className="flex">
        <div>
          <Heading title="Filter"  />
          <Filter price={price} setPrice={setPrice} />
        </div>
        <div className="px-10">
            <Heading title="Product" center />
            <ProductCard list={response} />
        </div>
      </div>
    </Container>
  );
};

export default FilterPage;
