import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import App from "./App"
import Error from "./pages/error"

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
    ],
  },
])
