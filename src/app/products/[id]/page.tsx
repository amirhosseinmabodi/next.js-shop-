import Itemactionbtn from "@/app/components/Itemactionbtn/Itemactionbtn";
import Container from "@/app/components/container/Container";
import React from "react";
interface getparams {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
async function page(propes: getparams) {
  const data = await propes.params.id;
  const res = await fetch(`http://localhost:8000/products/${data}`);
  const product = await res.json();

  return (
    <div className="flex flex-row justify-baseline p-12 gap-8 items-center shadow-xl m-4 rounded bg-gradient-to-br from-gray-200 to-white  border-gray-400"> 
      <img className="w-2xl rounded" src={product.img} />
      <div className="flex flex-col justify-center items-center p-12 w-2xl gap-4">
        <h2 className="text-5xl font-bold text-violet-500">{product.Productname}</h2>
        <p className="text-gray-900 font-medium">{product.description}</p>
        <p className="text-xl">price: ${product.price}</p>
        <Itemactionbtn id={data} />
      </div>
    </div>
  );
}

export default page;
