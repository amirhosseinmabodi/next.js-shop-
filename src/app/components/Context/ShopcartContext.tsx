"use client";
import { type } from "os";
import React, { createContext, useContext, useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { json } from "stream/consumers";
type shopcartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};
type TShopcartcontext = {
  cartItem: CartItem[];
  handleclickqty: (id: number) => void;
  getProductQty : (id: number) => number
  handleclickqtydecrease: (id: number) => void;
  removFrombasket : (id: number) => void;
};
const Shopcartcontext = createContext({} as TShopcartcontext);

export const useShopcartcontextuse = () => {
  return useContext(Shopcartcontext);
};

function ShopcartContextprovider({ children }: shopcartProviderProps) {
  const [cartItem, setcartItem] = useState<CartItem[]>([]);
  const getProductQty = (id: number) => {
    return cartItem.find((item) => item.id == id)?.qty || 0;
  };
  const handleclickqty = (id: number) => {
    setcartItem((curentitem) => {
      let isnotproductexsist =
        curentitem.find((item) => item.id === id) == null;
      if (isnotproductexsist) {
        return [...curentitem, { id: id, qty: 1 }];
      } else {
        return curentitem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleclickqtydecrease = (id: number) => {
    setcartItem((curentitem) => {
      let isnotproductexsist =
        curentitem.find((item) => item.id === id) == null;
      if (isnotproductexsist) {
        return [...curentitem, { id: id, qty: 1 }];
      } else {
        return curentitem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty> 1 ? item.qty- 1 : 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  useEffect(() => {
    const storeItem = localStorage.getItem("cartItem")
    if (storeItem) {
      setcartItem(JSON.parse(storeItem))
    }
  },[])
  useEffect(() => {
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
  },[cartItem])
  const removFrombasket = (id: number) => {
    setcartItem((curentitem) => {
      return curentitem.filter((item) => item.id != id);
    });
  };  

  
  return (
    <Shopcartcontext.Provider value={{ cartItem, handleclickqty, getProductQty, handleclickqtydecrease , removFrombasket }}>
      {children}
    </Shopcartcontext.Provider>
  );
}

export default ShopcartContextprovider;
