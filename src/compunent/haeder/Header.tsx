import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header
            className='flex justify-between items-center px-6 lg:px-10 py-5 shadow-lg '
        >
            <Link
                className='move-left-right'
                to={'/'}>
                <h1
                    className='font-bold text-3xl lg:text-6xl '
                >
                    <span
                        className='text-rose-500'
                    >Dz</span>
                    <span

                        className='text-5xl lg:text-7xl'
                    >.</span>
                    <span
                        className='text-cyan-600'
                    >Tour</span>
                </h1>
            </Link>
            <Link
                className='bg-cyan-600 text-white px-4 py-2 rounded-xl hover:-rotate-2 transition-all hover:scale-105'
                to={'/'}>Publier dz.tour</Link>
        </header>
    )
}

export default Header