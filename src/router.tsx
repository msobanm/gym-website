import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import App from "./App"
import Error from "./pages/error"
import Products from "./pages/products"
import About from "./pages/about"
import Contact from "./pages/contact"

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])
