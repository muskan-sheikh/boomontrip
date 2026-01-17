import { useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        
                        {/* Logo */}
                        <div className="cursor-pointer flex-shrink-0" onClick={() => handleNavigate('/')}>
                            <img
                                src="/assets/BoomOnT.png"
                                className="h-10 md:h-14 object-contain"
                                alt="BoomOnTrip logo"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <button 
                                onClick={() => handleNavigate('/')}
                                className="text-gray-700 hover:text-gray-900 font-medium text-base transition-colors"
                            >
                                Home
                            </button>
                            <button 
                                onClick={() => handleNavigate('/about')}
                                className="text-gray-700 hover:text-gray-900 font-medium text-base transition-colors"
                            >
                                About
                            </button>
                            <button 
                                onClick={() => handleNavigate('/trips')}
                                className="text-gray-700 hover:text-gray-900 font-medium text-base transition-colors"
                            >
                                Trips
                            </button>
                            <button 
                                onClick={() => handleNavigate('/blog')}
                                className="text-gray-700 hover:text-gray-900 font-medium text-base transition-colors"
                            >
                                Blog
                            </button>
                            <button 
                                onClick={() => handleNavigate('/contact')}
                                className="text-gray-700 hover:text-gray-900 font-medium text-base transition-colors"
                            >
                                Contact
                            </button>
                        </nav>

                        {/* Login Button - Desktop */}
                        <button 
                            onClick={() => handleNavigate('/login')}
                            className="hidden lg:block bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105"
                        >
                            Login now
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <HiX className="h-6 w-6" />
                            ) : (
                                <HiMenuAlt3 className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-16 md:top-20 left-0 right-0 bg-white shadow-lg z-40 border-b border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <nav className="py-4">
                        <button
                            onClick={() => handleNavigate('/')}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavigate('/about')}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleNavigate('/trips')}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                        >
                            Trips
                        </button>
                        <button
                            onClick={() => handleNavigate('/blog')}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                        >
                            Blog
                        </button>
                        <button
                            onClick={() => handleNavigate('/contact')}
                            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                        >
                            Contact
                        </button>
                        
                        {/* Mobile Login Button */}
                        <div className="px-6 py-4">
                            <button
                                onClick={() => handleNavigate('/login')}
                                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium text-sm transition-colors"
                            >
                                Login now
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;  