"use client";
import React from "react";
import useCartStore from "@/store";
import { Button } from "./ui/button";
import { getCartTotal } from "@/lib/getCartTotal";
import { groupedBasket } from "@/lib/groupedBasket";
import { ProductContent } from "@/types/product";
import Image from "next/image";
import AddToCart from "./AddToCart";

const Basket = () => {
  const cart = useCartStore((state) => state.cart);
  //   console.log("cart", cart);
  const baskeTotal = getCartTotal(cart);
  //@ts-ignore
  const newGroup = Object?.groupBy(
    cart,
    (item: ProductContent) => item.meta.sku
  );
  console.log("newGroup", newGroup);
  const goupedBasket = groupedBasket(cart);
  //   console.log("goupedBasket", goupedBasket);
  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-5 divide-y-2">
        {Object.keys(newGroup)?.map((sku) => {
          const item = newGroup[sku][0];
          const total = getCartTotal(newGroup[sku]);
          return (
            <li
              key={sku}
              className="p-5 my-2 flex items-center justify-between flex-col md:flex-row"
            >
              {item?.images[0] && (
                <Image
                  src={item?.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}
              <div className="flex space-x-4 pl-4">
                <div>
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="line-clamp-1 font-light text-sm mt-2"
                  />
                </div>
                <div className="flex flex-col border rounded-md p-5">
                  <AddToCart product={item} />
                  <p className="mt-4 font-bold text-right">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-end flex-col p-5">
        <p className=" font-bold text-xl text-right mb-5 text-walmart">
          Total {baskeTotal}
        </p>
        <Button className="h-20 mt-5 bg-walmart hover:bg-walmart/50">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Basket;
