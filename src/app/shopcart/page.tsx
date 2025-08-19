"use client";
import React, { useState, useEffect } from "react";
import Container from "../components/container/Container";
import CartItem from "../components/CartItem/CartItem";
import { useShopcartcontextuse } from "../components/Context/ShopcartContext";
import { it } from "node:test";
interface igetapi {
  id: number;
  img: string;
  Productname: string;
  description: string;
  price: number;
}

interface IgetDiscounts {
  Discount: number;
  Code: string;
}
function shopcart() {
  const { cartItem } = useShopcartcontextuse();
  const [data, setdata] = useState<igetapi[]>([]);
  const [DiscountCode, setDiscountCode] = useState("");
  const [discountAmount, setdiscountAmount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/products`);
        const json = await res.json();
        setdata(json);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchData();
  }, []);

  const discounts = async () => {
    try {
      const res = await fetch(`http://localhost:8000/Discounts`);
      const json = await res.json();
      const matchedItem: IgetDiscounts = json.find(
        (item: IgetDiscounts) => item.Code === DiscountCode
      );

      if (matchedItem) {
        setdiscountAmount(matchedItem.Discount);
      } else {
        console.log("not found");
        setdiscountAmount(0);
      }
    } catch (err) {
      console.error("Failed to fetch product:", err);
    }
  };
  const totalprice = cartItem.reduce((total, item) => {
    const selectedProduct = data.find((product) => product.id == item.id);
    console.log(selectedProduct);
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);
  const discountedPrice = totalprice - (totalprice * discountAmount) / 100;
  return (
    <div className="max-w-7xl m-auto p-4 flex justify-around">
      <div className="flex flex-col gap-4 rounded-2xl shadow-2xl">
        <div className="p-4 bg-gradient-to-br from-sky-600 to-violet-600 rounded-2xl text-2xl text-center text-white font-bold">Cart Items</div>
        {cartItem.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="flex flex-col gap-4 rounded-2xl shadow-2xl">
        <div className="p-4 bg-gradient-to-br from-sky-600 to-violet-600 rounded-2xl text-2xl text-center text-white font-bold">Cart Items</div>
        <div className="flex flex-col p-8 gap-4">
        <h3 className="font-bold capitalize">total price: {totalprice}$</h3>
        <h3 className="font-bold capitalize">Discount: {totalprice - discountedPrice}$</h3>
        <h3 className="font-bold capitalize">final price: {discountedPrice}$</h3>
        <hr className="opacity-10" />
        <div className="flex justify-between gap-4">
          <input
            className="border-2 rounded border-gray-100 px-4"
            type="text"
            placeholder="Discount Code:"
            onChange={(e) => {
              setDiscountCode(e.target.value);
            }}
          />
          <button className="rounded px-4 bg-gradient-to-br from-sky-500 via-violet-500 border-2 border-gray-200 hover:cursor-pointer text-2xl text-white" onClick={() => discounts()}>submit</button>
        </div>
        <button className="w-full p-4 mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded text-white text-2xl font-bold cursor-pointer hover:scale-110 transition duration-300">Proceed to Checkout 🚀</button>
      </div>
      </div>
      
    </div>
  );
}

export default shopcart;
