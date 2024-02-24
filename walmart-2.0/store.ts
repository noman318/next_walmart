import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { ProductContent } from "./types/product";

interface CartState {
  cart: ProductContent[];
  addToCart: (product: ProductContent) => void;
  removeToCart: (product: ProductContent) => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeToCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );
          console.log("productToRemove", productToRemove);
          set((state) => {
            const newCart = [...state.cart];
            newCart.splice(productToRemove, 1);
            return { cart: newCart };
          });
        },
      }),
      {
        name: "sopping-cart-storage",
      }
    )
  )
);

export default useCartStore;
