import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import ProductDetails from './components/products/ProductDetails'
import ProductList from './components/products/ProductList'
import Cart from './components/cart/Cart'
import OrderHistory from './components/orderHistory/OrdersHistory'


function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="categories/:categoryName" element={<ProductList />}/>
          <Route path="cart/" element={<Cart />}/>
          <Route path="orders/" element={<OrderHistory />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
