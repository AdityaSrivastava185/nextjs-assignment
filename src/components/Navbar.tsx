import NavLinks from '@/utils/NavLinks'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h1 className="text-xl font-bold text-gray-900">Events Explorer</h1>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <NavLinks />
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
