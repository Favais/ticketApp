import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="grow w-full max-w-[1440px] absolute">{children}</main>
            <Footer />
        </div>
    );
}
