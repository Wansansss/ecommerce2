"use client";

import Button from "@/components/utils/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const FilterHargaMin = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const value = searchRef.current.value1;

    if (!value || value.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      console.log("Enter");
      router.push(`/product/Filter/${value}`);
    }
  };

  return (
    <>
      <p>Harga : </p>
      <p>From</p>
      <input
        type="number"
        ref={searchRef}
        onKeyDown={handleSearch}
        className="border border-solid border-black rounded"
      />
    </>
  );
};

export default FilterHargaMin;
