import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 أضفنا دي
import "./index.css";
import App from "./App.jsx";
import "./styles/tailwind.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* 👈 غلفنا App بالـ Router */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
