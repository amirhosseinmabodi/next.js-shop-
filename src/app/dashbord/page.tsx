"use client";
import React, { Fragment, useState } from "react";
import Container from "../components/container/Container";
import { match } from "node:assert";

function dashbord() {
  const [product, setproduct] = useState({
    img: "",
    Productname: "",
    description: "",
    price: "",
  });
  const echangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setproduct((perv) => ({
      ...perv,
      [name]: value,
    }));
  };
  const onclickhandler = async () => {
    const productWithId = {
      ...product,
      id: Math.floor(Math.round(1000)),
    };

    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productWithId),
      });

      if (!res.ok) throw new Error("خطا در ارسال");

      const data = await res.json();
      console.log("ثبت شد:", data);

      setproduct({
        img: "",
        Productname: "",
        description: "",
        price: "",
      });
    } catch (error) {
      console.error("خطا:", error);
    }
  };
  return (
    <div className="relative m-auto p-12 flex justify-center items-center flex-col gap-4 max-w-7xl h-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <input
        className="rounded border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-4 h-10 w-60 transition duration-300 border-violet-400"
          name="img"
          onChange={echangehandler}
          type="text"
          placeholder="image url"
        />
        <input
        className="rounded border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-4 h-10 w-60 transition duration-300 border-violet-400"
          name="Productname"
          onChange={echangehandler}
          type="text"
          placeholder="product name"
        />
        <input
        className="rounded border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-4 h-10 w-60 transition duration-300 border-violet-400"
          name="description"
          onChange={echangehandler}
          type="text"
          placeholder="description"
        />
        <input
        className="rounded border focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-4 h-10 w-60 transition duration-300 border-violet-400"
          name="price"
          onChange={echangehandler}
          type="text"
          placeholder="price"
        />
      </div>
      <button
        onClick={onclickhandler}
        className="mt-2 text-2xl font-bold cursor-pointer hover:scale-105 transition duration-300 w-50 h-10 bg-blue-500 text-white rounded"
      >
        create
      </button>
    </div>
  );
}

export default dashbord;
