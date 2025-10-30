import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="grow w-full max-w-[1440px] absolute"><Outlet /></main>
            <Footer />
        </div>
    );
}
