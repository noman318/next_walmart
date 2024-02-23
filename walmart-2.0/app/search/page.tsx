import fetchSearchData from "@/lib/fetchSearch";
import React from "react";

type Props = {
  searchParams: {
    q: string;
  };
};
const SearchPage = async ({ searchParams: { q } }: Props) => {
  const results = await fetchSearchData(q);
  //   console.log("results", results);
  return <div>SearchPage</div>;
};

export default SearchPage;
