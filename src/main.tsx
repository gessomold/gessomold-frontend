import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./ components/Header/index.tsx";
import { Page } from "./pages/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode >

    <Header />
    <Page />
  </StrictMode>,
);
