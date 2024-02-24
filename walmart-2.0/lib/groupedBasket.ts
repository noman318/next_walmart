import { ProductContent } from "@/types/product";

export const groupedBasket = (
  products: ProductContent[]
): Record<string, ProductContent[]> => {
  return products?.reduce(
    (acc: Record<string, ProductContent[]>, curr: ProductContent) => {
      const sku = curr.meta.sku;
      if (!acc[sku]) {
        acc[sku] = [];
      }
      acc[sku].push(curr);
      return acc;
    },
    {}
  );
};
