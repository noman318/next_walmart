"use client";
import useCartStore from "@/store";
import { ProductContent } from "@/types/product";
import React from "react";
import { Button } from "./ui/button";
import RemoveToCart from "./RemoveToCart";

function AddToCart({ product }: { product: ProductContent }) {
  // console.log("product", product);
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);
  const cartItems = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;
  // console.log("cart", cart);
  //   console.log("cartItems", cartItems);
  const handleAddCart = () => {
    // console.log("clicked");
    addToCart(product);
  };
  if (cartItems > 0) {
    return (
      <div className="flex items-center space-x-5">
        <RemoveToCart product={product} />
        <span>{cartItems}</span>
        <Button
          className="bg-walmart hover:bg-walmart/50"
          onClick={handleAddCart}
        >
          +
        </Button>
      </div>
    );
  }
  return (
    <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAddCart}>
      Add to Cart
    </Button>
  );
}

export default AddToCart;
