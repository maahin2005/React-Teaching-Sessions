import React, { useEffect } from "react";

function DataFetch() {
  let API_URL = "https://fakestoreapi.com/products";

  async function fetchingData() {
    try {
      let fetchTheData = await fetch(API_URL);

      let resp = await fetchTheData.json();

      console.log("Responce: ", resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return <div></div>;
}

export default DataFetch;
