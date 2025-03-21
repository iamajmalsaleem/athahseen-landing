import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPage = location.pathname.substring(1) || 'home';

  const getNavItemClass = (page: string) => {
    return `relative py-2 text-gray-600 hover:text-emerald-600 transition-colors ${
      currentPage === page ? 'text-emerald-600 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600' : ''
    }`;
  };

  const getMobileNavItemClass = (page: string) => {
    return `block py-3 px-4 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 transition-colors ${
      currentPage === page ? 'text-emerald-600 font-medium bg-gray-50' : ''
    }`;
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/athahseen-landing/AthahseenLogo.png" alt="Athahseen Logo" className="h-12 w-auto md:h-16 object-contain" />
          <span className="text-lg md:text-2xl font-bold text-gray-800">Athahseen Quran Academy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link to="/" className={getNavItemClass('')}>
            Home
          </Link>
          <Link to="/courses" className={getNavItemClass('courses')}>
            Courses
          </Link>
          <Link to="/about" className={getNavItemClass('about')}>
            About
          </Link>
          <Link to="/contact" className={getNavItemClass('contact')}>
            Contact
          </Link>
          <button className="bg-emerald-600 text-white px-4 py-2 lg:px-6 lg:py-2 text-sm lg:text-base rounded-full hover:bg-emerald-700 transition">
            Start Learning
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Link to="/courses" className={getMobileNavItemClass('courses')} onClick={() => setIsMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/about" className={getMobileNavItemClass('about')} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className={getMobileNavItemClass('contact')} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="p-4">
            <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
              Start Learning
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
