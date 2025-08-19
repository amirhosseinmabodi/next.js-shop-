import { log } from "console";
import React from "react";
interface igetapi {
  img: string;
  Productname: string;
  description: string;
  price: number;
}

function ProductCard(items: igetapi) {
  console.log(items);

  return (
    <div className="group bg-white shadow-lg border-2 rounded-2xl border-gray-100 hover:shadow-2xl hover:border-purple-100 transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500"
          src={items.img}
          alt=""
        />
      </div>
      <div className="p-6">
        <h2 className="font-bold text-lg line-clamp-2 text-gray-900 group-hover:text-violet-600 transition-colors mb-4">{items.Productname}</h2>
        <p className="font-bold text-sm text-gray-900 line-clamp-2 mb-4">{items.description}</p>
        <p className="font-bold text-xl mb-4">
          <span className="text-green-800 ">${items.price}</span>
        </p>
        <div className="flex gap-4 justify-center">
          <button className=" bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">View Product</button>
          <button className="text-violet-600 border-2 border-gray-400 bg-transparent p-4 rounded-2xl cursor-pointer hover:border-violet-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg></button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
