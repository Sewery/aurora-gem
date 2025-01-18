import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import ProductDetails from './components/products/ProductDetails'
import ProductList from './components/products/ProductList'
import LoginPage from './components/user/LoginPage'
import RegisterPage from './components/user/RegisterPage'
import NotFoundPage from './components/NotFoundPage'



function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="categories/:categoryName" element={<ProductList />}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
