import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductList from "./components/product/ProudctList.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
