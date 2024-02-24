import { ProductContent } from "@/types/product";

export const getCartTotal = (products: ProductContent[]): string => {
  const total = products?.reduce((acc: number, curr: ProductContent) => {
    return acc + curr?.price;
  }, 0);

  const currency = products[0]?.currency || "USD";
  //   console.log("currency", currency);

  return `${currency} ${total?.toFixed(2)}`;
};
