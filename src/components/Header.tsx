import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button } from './ui/button'
const Header = () => {
    return (
        <div className='flex items-center justify-between w-full z-50'>
            <img src={logo} alt="" width={'100px'} />
            <div className='border rounded-b-full py-3 px-12 '>
                <ul className='flex gap-20'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-3'>
                <Link to={'/login'}>
                    <Button className='hover:bg-sky-800 hover:text-white bg-skyblue text-white' variant={'outline'}>Login</Button>
                </Link>
                <Button className='hover:bg-gray-200 hover:text-white' variant={'outline'}>Get Started</Button>
            </div>

        </div>
    )
}

export default Header