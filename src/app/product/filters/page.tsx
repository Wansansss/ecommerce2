"use client";

import Container from "@/components/utils/Container";
import axios from "axios";
import { useState } from "react";
import ProductCard from "@/components/utils/products/ProductCard";
import Heading from "@/components/utils/Heading";
import Button from "@/components/utils/Button";
import toast from "react-hot-toast";
import CurrencyInput from "react-currency-input-field";


const FilterPage = () => {
  const [minPrice, setMinPrice] = useState<any>("0");
  const [response, setResponse] = useState<any>("");
  const [maxPrice, setMaxPrice] = useState<any>("0");
  // console.log(minPrice)

  async function handleSubmit(event: any) {
    event.preventDefault();
    await axios
      .get(
        process.env.NEXT_PUBLIC_API_URL +
          `/api/sl/v1/web/product/filter?page=1&limit=10&rangeFrom=${minPrice}&rangeTo=${maxPrice}`
      )
      .then((response) => {
        if (response.status === 200) {
          setResponse(response.data);
        }
      })
      .catch(() => {
        toast.error("Produk Tidak Ditemukan");
      });
  }
  return (
    <Container>
      <div className="py-16">
        <div className=" py-16">
          <Heading title="Filter" />
          <div className="border-b-[0.5px] pb-10">
            <div className="px-5 py-4 border-b-[0.5px] mb-5">
              <h1 className="text-neutral-800">Harga</h1>
            </div>
            <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
              <div>
                <label htmlFor="" className="text-[15px] opacity-75">
                  Dari
                </label>
                <div className="relative">
                  {/* <span className="absolute left-3 top-1">Rp</span>
                  <input
                    type="number"
                    className="w-[200px] outline-none border-[1px] border-black rounded px-2 text-center py-[2px]"
                    name="rangeFrom"
                    onChange={(e) => setMinPrice(e.target.value)}
                  /> */}
                  <CurrencyInput
                  className="form-control"
                  placeholder="Harga"
                  prefix="Rp."
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={(value, name, values) => setMinPrice(value)}
                />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
              <div>
                <label htmlFor="" className="text-[15px] opacity-75">
                  Sampai
                </label>
                <div className="relative">
                <CurrencyInput
                  className="form-control"
                  placeholder="Harga"
                  prefix="Rp."
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={(value, name, values) => setMaxPrice(value)}
                />
                </div>
              </div>
            </div>
            <div className="py-10">
              <Button label="Simpan" small outline onClick={handleSubmit} />
            </div>
          </div>
          <Heading title="Produk Pilihan" />
          <ProductCard list={response} />
        </div>
      </div>
    </Container>
  );
};

export default FilterPage;
