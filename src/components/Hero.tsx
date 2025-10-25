import { Link } from "react-router-dom"
import CircularDecor from "./CircularDecor"
import { Button } from "./ui/button"

const Hero = () => {
    return (
        <div className={`flex absolute min-h-screen overflow-hidden bg-linear-to-br from-[#0384c8] to-blue-600`}>
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


            {/* <svg
                className="absolute left-0 right-0 bottom-0 w-full h-40 md:h-56 opacity-"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    fill="#0384c8"          // color for area below the wave (page bg)
                    d="M0,192L60,165.3C120,139,240,85,360,96C480,107,600,181,720,202.7C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    opacity="1"
                />
            </svg> */}
            <CircularDecor className={'z-0 absolute right-16 '} height={'100px'} width={'100px'} />
            <CircularDecor className={'z-0 absolute right-14 top-7 '} height={'100px'} width={'100px'} />
            <CircularDecor className={'z-0 absolute right-12 top-8 '} height={'100px'} width={'100px'} />
            <div className="grid grid-cols-2 p-8 items-center justify-center">
                <div className=" flex flex-col gap-5 w-full p-10">
                    <h1 className="text-7xl text-white ">Ticlify</h1>
                    <p className="text-2xl text-white">Manage Tickets Effortlessly — Across Teams and Projects.</p>
                    <div className="flex gap-6">
                        <Link to={'/login'}>
                            <Button size={"lg"} className="bg-skyblue">Get Started</Button>
                        </Link>
                        <Button size={'lg'} variant={'outline'}>Login</Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative mx-auto max-w-md">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1593823004803-3aad2497ac44?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d2F2eSUyMGJsdWUlMjBncmFkaWVudHxlbnwxfDB8fHwxNzYxMzg2MzM3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Modern app interface" className="w-full h-64 object-cover rounded-2xl mb-4" loading="eager" />
                            <div className="space-y-3">
                                <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
                                <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
                                <div className="h-4 bg-white/20 rounded-full w-2/3"></div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-lg"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/15 rounded-full blur-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero