import React, { Fragment } from "react";
import Container from "../components/container/Container";
import ProductCard from "../components/ProductCard/ProductCard";
import Link from "next/link";
import Paigination from "../components/Paigination/Paigination";
import Search from "../components/Search/Search";

interface Igetpropes {
  searchParams?: { _page?: string; _per_page?: string; Productname?: string };
}

async function Products({ searchParams }: Igetpropes) {
  
  const page = searchParams?._page ?? "1";
  const per_page = searchParams?._per_page ?? "4";
  const Productname = searchParams?.Productname ?? "";

  const res = await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${per_page}&Productname=${Productname}`);
 console.log(res);
  const data = await res.json();
 
  
  return (
    <Fragment>
      <header>
        <div className=" bg-sky-600 bg-cover bg-center h-75 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl lg:text-7xl font-bold text-white">
          Find Your Perfect{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
            Tech
            </span>
          </h1>
          <p className="text-lg lg:text-2xl text-white max-w-3xl text-center">
          Discover amazing gadgets that'll upgrade your digital life
          </p>
        </div>
      </header>
      <div className="max-w-7xl m-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg mb-6 p-4 flex justify-center">
          <Search/>
        </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((item: any) => (
          <Link key={item.id} href={`products/${item.id}`}>
            <ProductCard {...item} />
          </Link>
        ))}
      </div>
      <Paigination pageCount={data.pages} />
      </div>
    </Fragment>
  );
}

export default Products;
