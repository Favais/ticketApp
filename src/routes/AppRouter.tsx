import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import { LoginPage } from "@/pages/auth/Login"
import MainLayout from "@/layout/MainLayout"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default AppRouter