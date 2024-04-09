import React from "react";
import { Heading } from "@chakra-ui/react";

function Items({ i, competition }) {
  return (
    <Heading p={30}>
      {i}, {competition}
    </Heading>
  );
}

export default Items;
