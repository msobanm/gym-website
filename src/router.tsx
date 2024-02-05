import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import App from "./App"
import Error from "./pages/error"
import Products from "./pages/products"
import About from "./pages/about"
import Contact from "./pages/contact"
import Product from "./pages/product"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productTitle",
        element: <Product />,
      },
    ],
  },
])
