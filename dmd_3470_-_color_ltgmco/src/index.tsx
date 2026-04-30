import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Color } from "./screens/Color";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Color />
  </StrictMode>,
);
