import { useAppContext } from '@/context/appContext';
import { LogOut, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png'
import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const DashHeader = () => {
    const { logOut, navigate } = useAppContext()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" width={'100px'} />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to={'/dashboard'}
                        >
                            Dashboard
                        </Link>
                        <Link
                            to={'/tickets'}
                        >
                            Tickets
                        </Link>
                        <Button
                            variant="outline"
                            className="rounded-xl"
                            onClick={() => logOut()}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 space-y-4 border-t border-border">
                        <button
                            onClick={() => {
                                navigate("dashboard");
                                setMobileMenuOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${currentPage === "dashboard"
                                ? "bg-sky-50 text-sky-700"
                                : "text-muted-foreground hover:bg-muted"
                                }`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => {
                                navigate("tickets");
                                setMobileMenuOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${currentPage === "tickets"
                                ? "bg-sky-50 text-sky-700"
                                : "text-muted-foreground hover:bg-muted"
                                }`}
                        >
                            Tickets
                        </button>
                        <Button
                            onClick={() => {
                                logOut();
                                setMobileMenuOpen(false);
                            }}
                            variant="outline"
                            className="w-full rounded-xl"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default DashHeader