import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./components/layout/Layout"
import TnpDashboard from "./pages/tnp/TnpDashboard"
import { useAuth } from "./context/AuthContext"
import "./styles/global.css"
import "./styles/layout.css"
import "./styles/theme.css"
import "./styles/login.css"
import "./styles/tnp.css"
import "./styles/model.css"


export default function App() {
  const { user } = useAuth()

  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  }

  if (user.role === "tnp") {
    return <TnpDashboard />
  }

  return <Layout />
}