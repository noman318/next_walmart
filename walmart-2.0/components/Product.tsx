import { OrganicProduct } from "@/types/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

const Product = ({ product }: { product: OrganicProduct }) => {
  //   console.log("product", product);
  return (
    <Link
      href={{
        pathname: `/product`,
        query: { url: product.url },
      }}
      className="flex flex-col relative rounded-md border h-full p-5"
    >
      <Image
        src={product.image}
        height={100}
        width={100}
        alt={product.title}
        className="mx-auto"
      />
      <p className="text-xl font-bold">
        {product.price.currency}
        {product.price.price}
      </p>
      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>
      )}
      {product.rating && product.rating.rating > 0 && (
        <p className="text-sm text-yellow-500">
          {product.rating.rating}⭐
          <span className="ml-2 text-gray-400">({product.rating.count})</span>
        </p>
      )}
    </Link>
  );
};

export default Product;
