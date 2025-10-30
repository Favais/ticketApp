import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex justify-between py-10 px-7 bg-white'>
            <p>© 2025 Tickly. All rights reserved.</p>
            <div className='space-x-4'>
                <Link to="/about">About</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Footer