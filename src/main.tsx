import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import queryClient from "./query/queryClient.ts";
import Gallery from "./pages/Gallery.tsx";
import ResponsiveAppBar from "./components/AppBar.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
