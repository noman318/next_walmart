import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  image?: string;
  className?: string;
};
const GridOption = ({ title, image, className }: Props) => {
  return (
    <Link
      href={{ pathname: "/", query: { q: title } }}
      className={cn("grid_option relative", className)}
    >
      <h2>{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md opacity-20"
        />
      )}
    </Link>
  );
};

export default GridOption;
