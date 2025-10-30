import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import { LoginPage } from "@/pages/auth/Login"
import MainLayout from "@/layout/MainLayout"
import { Dashboard } from "@/pages/Dashboard"
import ProtectedRoute from "@/routes/ProtectedRoute"
import Tickets from "@/pages/Tickets"


const AppRouter = () => {
    return (
        <Routes >
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/auth/login"
                    element={
                        <LoginPage
                            onLogin={() => { }}
                            onSwitchToSignup={() => { }}
                            onBackToHome={() => { }}
                        />
                    }
                />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tickets" element={<Tickets />} />
            </Route>
        </Routes>
    )
}

export default AppRouter