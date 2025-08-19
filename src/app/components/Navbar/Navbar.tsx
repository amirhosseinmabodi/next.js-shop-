"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const path = usePathname();
  console.log(path);
  const navurls = [
    {
      page: "home",
      url: "/",
    },
    {
      page: "products",
      url: "/products",
    },
    {
      page: "shopcart",
      url: "/shopcart",
    },
    {
      page: "dashbord",
      url: "/dashbord",
    },
    {
      page: "login",
      url: "/login",
    },
  ];

  return (
    <div className="shadow flex gap-4 p-3 font-bold uppercase  justify-between ">
      <div className="content-center  text-violet-500">
        <h1>online shop</h1>
      </div>
      <div className="flex gap-4 p-3 font-bold uppercase">
          <Link
            className="rounded-full p-2 hover:bg-amber-50 hover:text-violet-500"
            href="/"
          >
            home
          </Link>
          <Link
            className="rounded-full p-2 hover:bg-amber-50 hover:text-violet-500"
            href="/products"
          >
            products
          </Link>
          <Link
            className="rounded-full p-2 hover:bg-amber-50 hover:text-violet-500"
            href="/dashbord"
          >
            dashbord
          </Link>
          <Link
            className="rounded-2xl p-2 text-white bg-violet-500 hover:scale-110"
            href="/shopcart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>
          <button className="text-white bg-violet-500 px-4 rounded-2xl cursor-pointer"> <Link  href="/login">Sing In</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
