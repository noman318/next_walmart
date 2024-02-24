import AddToCart from "@/components/AddToCart";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import fetchProductData from "@/lib/fetchProduct";

import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
type Props = {
  searchParams: {
    url: string;
  };
};
const ProductPage = async ({ searchParams: { url } }: Props) => {
  //   console.log("url", url);
  const product = await fetchProductData(url);
  //   console.log("product", product);
  if (!product) return notFound();
  return (
    <div className="p-4 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product.content.images?.map((image, i) => (
          <Image
            src={image}
            key={image}
            alt={product.title + " " + i + 1}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
      <Carousel
        opts={{ loop: true }}
        className="mb-10 w-3/5 lg:mb-0 lg:w-3/5 flex items-center self-start max-w-xl mx-auto lg:mx-0"
      >
        <CarouselContent>
          {product.content.images?.map((image, i) => (
            <CarouselItem key={image}>
              <div className="p-1">
                <div className="flex items-center justify-center p-2 relative aspect-square">
                  <Image
                    src={image}
                    key={image}
                    alt={product.title + " " + i + 1}
                    width={400}
                    height={400}
                    className="border rounded-sm"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-0 md:ml-24" />
        <CarouselNext className="mr-0 md:mr-24" />
      </Carousel>
      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h2 className="text-2xl font-bold">{product.content.title}</h2>
        <div>
          {product.content.breadcrumbs?.map((breadcrumb) => (
            <Badge key={breadcrumb} variant={"outline"} className={`p-1 m-2`}>
              {breadcrumb}
            </Badge>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: product.content.description }}
          className="py-5"
        />
        {product.content.rating && (
          <p className="text-sm text-yellow-500">
            {product.content.rating.rating}⭐
            <span className="ml-2 text-gray-400">
              ({product.content.rating.count})
            </span>
          </p>
        )}
        <p className="text-xl font-bold mb-2">
          {product.content.currency} {product.content.price}
        </p>
        <AddToCart product={product.content} />
        <hr />
        <h3 className="font-bold text-xl pt-10">Secifications</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Secifications</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.content.specifications?.map((spec, i) => (
              <TableRow key={spec.key}>
                <TableCell className="font-medium">{spec.key}</TableCell>
                <TableCell className="text-right">{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductPage;
