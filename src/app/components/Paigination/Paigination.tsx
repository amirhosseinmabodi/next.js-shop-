"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();

  const handlePageClick = (e: any) => {
    const page = e.selected + 1;
    router.push(`/products?_page=${page}&_per_page=4`);
  };

  return (
    <div className="flex justify-center mt-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2"
        pageClassName="px-3 py-1  rounded-lg cursor-pointer"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1  rounded-lg cursor-pointer hover:bg-sky-500 hover:text-white"
        nextClassName="px-3 py-1  rounded-lg cursor-pointer hover:bg-sky-500 hover:text-white"
        breakClassName="px-3 py-1 text-gray-500"
      />
    </div>
  );
}

export default Pagination;
