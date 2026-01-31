import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import Login from "./pages/Login"
import Layout from "./components/layout/Layout"
import TnpDashboard from "./pages/tnp/TnpDashboard"

export default function App() {
  const { user } = useAuth()

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
  }

  if (user.role === "tnp") {
    return <TnpDashboard />
  }

  return <Layout />
}