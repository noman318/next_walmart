"use client";
import useCartStore from "@/store";
import { ProductContent } from "@/types/product";
import React from "react";
import { Button } from "./ui/button";
function RemoveToCart({ product }: { product: ProductContent }) {
  const [cart, removeToCart] = useCartStore((state) => [
    state.cart,
    state.removeToCart,
  ]);
  const cartItems = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;
  const handleRemoveCart = () => {
    // console.log("clicked");
    removeToCart(product);
  };

  return (
    <Button
      disabled={cartItems === 0}
      className="bg-walmart hover:bg-walmart/50"
      onClick={handleRemoveCart}
    >
      -
    </Button>
  );
}

export default RemoveToCart;
