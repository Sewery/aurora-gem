import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'


function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
