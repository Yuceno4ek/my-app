import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
    <footer>
      <a href="https://github.com/Yuceno4ek/my-app">Open source-code</a> by
      Yuliia Demchenko
    </footer>
  </StrictMode>
);
