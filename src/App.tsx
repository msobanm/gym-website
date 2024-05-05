import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"
import Error from "./pages/error"
import Products from "./pages/products"
import About from "./pages/about"
import Contact from "./pages/contact"
import Product from "./pages/product"
import Login from "./pages/login"
import Register from "./pages/register"
import useAuth from "./utils/hooks/useAuth"

function App() {
  const { isAuth } = useAuth()
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      {!isAuth && <Route path="/login" element={<Login />} />}
      {!isAuth && <Route path="/register" element={<Register />} />}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:title" element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
