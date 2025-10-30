import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-sm z-50">
            {/* Logo */}
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-24 md:w-28" />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex border rounded-b-full py-3 px-10">
                <ul className="flex gap-12 text-gray-700 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3">
                <Link to="/auth/login">
                    <Button className="hover:bg-sky-800 hover:text-white bg-skyblue text-white" variant="outline">
                        Login
                    </Button>
                </Link>
                <Button className="hover:bg-gray-200" variant="outline">
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex items-center"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t py-5 flex flex-col items-center gap-5 md:hidden">
                    <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                    <div className="flex flex-col gap-3 mt-4">
                        <Link to="/auth/login">
                            <Button
                                className="bg-skyblue text-white w-40"
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="w-40"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
