import { Link } from "react-router-dom"
import CircularDecor from "./CircularDecor"
import { Button } from "./ui/button"

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0384c8] to-blue-600">
            {/* Decorative Waves */}
            <svg
                className="absolute w-full h-full inset-0"
                viewBox="0 0 1440 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#0384c8" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                <path
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
                    fill="url(#waveGradient)"
                    className="animate-pulse"
                />
                <path
                    d="M0,320L48,309.3C96,299,192,277,288,261.3C384,245,480,235,576,250.7C672,267,768,309,864,314.7C960,320,1056,288,1152,277.3C1248,267,1344,277,1392,282.7L1440,288L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
                    fill="url(#waveGradient)"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </svg>

            {/* Decorative Circles */}
            <CircularDecor className="z-0 absolute right-16 hidden md:block" height="100px" width="100px" />
            <CircularDecor className="z-0 absolute right-14 top-7 hidden md:block" height="100px" width="100px" />
            <CircularDecor className="z-0 absolute right-12 top-8 hidden md:block" height="100px" width="100px" />

            {/* Content Section */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                        Ticlify
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                        Manage Tickets Effortlessly — Across Teams and Projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link to="/login">
                            <Button size="lg" className="bg-skyblue text-white hover:bg-sky-800">
                                Get Started
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="bg-white/20 text-white hover:bg-white/30">
                            Login
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center md:justify-end">
                    <div className="relative w-full max-w-sm sm:max-w-md">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1593823004803-3aad2497ac44?auto=format&fit=crop&w=800&q=80"
                                alt="Modern app interface"
                                className="w-full h-56 sm:h-64 object-cover rounded-2xl mb-4"
                                loading="eager"
                            />
                            <div className="space-y-3">
                                <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
                                <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
                                <div className="h-4 bg-white/20 rounded-full w-2/3"></div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full blur-lg"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 md:w-16 md:h-16 bg-white/15 rounded-full blur-md"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
