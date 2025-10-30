import { Navigate, Outlet } from "react-router-dom";
import DashHeader from "../components/dashboard/DashHeader";

export default function ProtectedRoute({ children }) {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) return <Navigate to="/auth/login" />;
    return (
        <div>
            <DashHeader />
            <Outlet />
        </div>
    )
}