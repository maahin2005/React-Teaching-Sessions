### api fetch data - store

### Routing setup

    1. install :- npm i react-router-dom
    // index.js
    2. import { BrowserRouter } from 'react-router-dom';
    3. wrap the our App component
     ex.     <BrowserRouter>
             <App />
             </BrowserRouter>

     4. seprate file  for Routing
     5. import { Routes, Route } from "react-router-dom";
     6. import Home from "../Components/Home";
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>

### using the ContextAPI

- create - import - export const AuthContext = createContext();
- 2.  return <AuthContext></AuthContext>;
- 3. <AuthContextProvider>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </AuthContextProvider>
