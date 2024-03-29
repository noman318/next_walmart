"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import walmartLogo from "../public/Walmart.png";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import useCartStore from "@/store";
import { ProductContent } from "@/types/product";
import { getCartTotal } from "@/lib/getCartTotal";

const Header = () => {
  const router = useRouter();
  const [cart] = useCartStore((state) => [state.cart]);
  // console.log("cartnHeadre", cart);
  const total = getCartTotal(cart);
  // console.log("totalInHead", total);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.input.value;
    // console.log("input", input);
    router.push(`/search?q=${input}`);
  };
  return (
    <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
      <Link href={`/`} className="mb-5 md:mb-0">
        <Image src={walmartLogo} width={150} height={150} alt="Walmart_Logo" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex px-4 rounded-full outline-none placeholder:text-sm w-full sm:w-85"
        />
        <button type="submit">
          <Search className="rounded-full h-10 bg-yellow-400 cursor-pointer px-2 w-10" />
        </button>
      </form>
      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={`/`}
          className="hidden xl:flex text-white font-bold items-center text-sm space-x-2"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={`/`}
          className="hidden xl:flex text-white font-bold items-center text-sm space-x-2"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={`/`}
          className="flex text-white font-bold items-center text-sm space-x-2"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href={`/`}
          className="flex text-white font-bold items-center text-sm space-x-2"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={`/basket`}
          className="flex text-white font-bold items-center text-sm space-x-2"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} Items` : "No Items"}
            </p>
            <p>{total}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
