import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./App.css";
import { SignupForm } from "./pages/SignupForm";
import { Result } from "./pages/Result/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
