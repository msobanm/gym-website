import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"
import Error from "./pages/error"
import Products from "./pages/products"
import About from "./pages/about"
import Contact from "./pages/contact"
import Product from "./pages/product"
import Login from "./pages/login"
import Register from "./pages/register"
import Cart from "./pages/cart"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"

const router = createBrowserRouter([{ path: "*", element: <Root /> }])

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  const auth = useAuthUser()

  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="*" element={<Error />} />
        {!auth && <Route path="/login" element={<Login />} />}
        {!auth && <Route path="/register" element={<Register />} />}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:title" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
