"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

function Search() {
  const [search, setsearch] = useState("");
  const router = useRouter();
  const searchparams = useSearchParams();
  const handleclick = () => {
    const currentSearchparams = new URLSearchParams(searchparams.toString());
    console.log(currentSearchparams.toString());
    currentSearchparams.set("Productname", search);
    console.log(currentSearchparams.toString());
    router.push(`/products?${currentSearchparams.toString()}`)
  };
  return (
    <div className="flex gap-1 mb-1">
      <input
        onChange={(e) => {
          setsearch(e.target.value);
        }}
        className="border-2 border-sky-300 focus:ring-sky-500 focus:outline-none p-1 rounded py-2 px-4"
        type="text"
      />
      <button
        onClick={handleclick}
        className="p-1 rounded cursor-pointer bg-gradient-to-br font-bold text-lg from-sky-500 via-violet-500 to-violet-400 hover:bg-sky-500 text-blue-50 py-2 px-6"
      >
        search
      </button>
    </div>
  );
}

export default Search;
