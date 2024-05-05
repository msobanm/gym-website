import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AuthProvider from "react-auth-kit/AuthProvider"
import createStore from "react-auth-kit/createStore"
import { BrowserRouter as Router } from "react-router-dom"

type UserData = {
  token: string
}

const queryClient = new QueryClient()
const store = createStore<UserData>({
  authName: "auth_token",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider store={store}>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
