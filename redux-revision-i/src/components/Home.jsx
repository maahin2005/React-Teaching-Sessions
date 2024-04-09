import React, { useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { getTheData } from "../Redux/FetchingRedux/actions";
import Items from "./Items";

function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state) || { data: [] };

  useEffect(() => {
    dispatch(getTheData());
  }, []);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  return (
    <Box>
      <Heading> Home Page</Heading>
      <SimpleGrid>
        {data?.map((el, i) => (
          <Items key={i} {...el} i={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
