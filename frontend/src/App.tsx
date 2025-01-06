import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'
import ProductsWithCategories from './components/ProductsWithCategories'


function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<ProductsWithCategories />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
