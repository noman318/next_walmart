import React from "react";

type Props = {
  searchParams: {
    q: string;
  };
};
const SearchPage = ({ searchParams: { q } }: Props) => {
  return <div>SearchPage</div>;
};

export default SearchPage;
