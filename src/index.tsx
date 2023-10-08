import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const customTheme = extendTheme({
  colors: {
    orange: {
      500: "#FF8C1E",
    },
    gray:{
      50:'#F6F6F6',
      100:"#B3B3B3"
    }
  },
});

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
