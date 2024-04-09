import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // https://jsonmock.hackerrank.com/api/football_matches?page=2
  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
