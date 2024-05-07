"use client";

import Button from "@/components/utils/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const FilterHargaMax = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const value = searchRef.current.value2;

    if (!value || value.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      console.log("Enter");
      router.push(`/product/Filter/${value}`);
    }
  };

  return (
    <>
      <p>To</p>
      <input
        type="number"
        ref={searchRef}
        onKeyDown={handleSearch}
        className="border border-solid border-black rounded"
        required
      />
      <div className="py-4">
        <Button
          small
          label="save"
          custom="hover:bg-transparent"
          onClick={handleSearch}
        />
      </div>
    </>
  );
};

export default FilterHargaMax;
