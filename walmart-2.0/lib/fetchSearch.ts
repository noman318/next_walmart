import { Results } from "@/types/search";

async function fetchSearchData(searchTerm: string) {
  //   console.log("searchTerm", searchTerm);
  const userName = process.env.OXYLABS_USERNAME;
  const userPassword = process.env.OXYLABS_PASSWORD;
  //   console.log("userName", userName);
  const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);
  //   console.log("newUrl", newUrl);
  const body = {
    source: "universal_ecommerce",
    url: newUrl.toString(),
    geo_location: "United States",
    parse: true,
  };

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
      const results: Results = data?.results[0];
      //   console.log("resultsInBackend", results);
      return results;
    })
    .catch((err) => console.log("err", err));
  return response;
}

export default fetchSearchData;
