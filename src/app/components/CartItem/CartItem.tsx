"use client";
import React from "react";
import { useShopcartcontextuse } from "../Context/ShopcartContext";
import { useEffect, useState } from "react";
import Itemactionbtn from "../Itemactionbtn/Itemactionbtn";
type CartItem = {
  id: string;
  qty: number;
};

interface igetapi {
  img: string;
  Productname: string;
  description: string;
  price: number;
}
function CartItem({ id, qty }: CartItem) {
  console.log(id, qty);
  const [data, setdata] = useState({} as igetapi);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/products/${id}`);
        const json = await res.json();
        setdata(json);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="border-2 border-gray-100 rounded-2xl p-6 mx-4 hover:border-violet-600 transition-colors">
      <div className="flex items-start space-x-6 space-x-reverse">
        <img
          className="h-24 w-24 object-cover object-top rounded-xl border-2 border-gray-400"
          src={data.img}
          alt="product img"
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start m-4 gap-4">
            <h2 className="col-span-3 text-2xl font-bold">{data.Productname}</h2>
            <div className="flex gap-4 text-xl font-bold">
              <p>
                price : $<span>{data.price}</span>
              </p>
              <p>
                qty: <span>{qty}</span>
              </p>
              <p>
                all price : $<span>{data.price * qty}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Itemactionbtn id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
