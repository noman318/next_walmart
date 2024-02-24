import { ProductContent } from "@/types/product";
import React from "react";

function AddToCart({ product }: { product: ProductContent }) {
  return (
    <div>
      <button>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
