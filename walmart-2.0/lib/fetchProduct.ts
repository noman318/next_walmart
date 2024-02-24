import { ProductContent, Result } from "@/types/product";

async function fetchProductData(url: string) {
  //   console.log("url", url);
  const userName = process.env.OXYLABS_USERNAME;
  const userPassword = process.env.OXYLABS_PASSWORD;
  //   console.log("userName", userName);
  const newUrl = new URL(`https://www.walmart.com${url}`);

  const body = {
    source: "universal_ecommerce",
    url: newUrl.toString(),
    geo_location: "United States",
    parse: true,
  };
  //   console.log("body.url", body.url);

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(`${userName}:${userPassword}`).toString("base64"),
    },
    next: { revalidate: 60 * 60 * 24 },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length === 0) return;
      const results: Result = data?.results[0];
      //   console.log("resultsInBackend", results);
      return results;
    })
    .catch((err) => console.log("err", err));
  return response;
}

export default fetchProductData;
