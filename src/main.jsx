import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { AuthProvider } from "./context/AuthContext"

import "./styles/global.css"
import "./styles/layout.css"
import "./styles/theme.css"
import "./styles/login.css"
import "./styles/tnp.css"
import "./styles/model.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
