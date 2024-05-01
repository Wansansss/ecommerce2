"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const value = searchRef.current.value;

    if (!value || value.trim() == "") return

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${value}`);
    }
  };

  return (
    <div className="relative shadow-sm items-center justify-center">
      <input
        placeholder="Cari..."
        className="rounded w-full md:w-96 p-1 text-black border border-gray-600"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1 end-1" onClick={handleSearch}>
        <IoSearchOutline size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
