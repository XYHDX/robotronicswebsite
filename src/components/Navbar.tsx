import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../firebase/auth';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, logout, isAdmin } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="Robotronics"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">Robotronics</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className={`px-3 py-2 text-sm ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`px-3 py-2 text-sm ${isActive('/about')}`}>About Us</Link>
            <Link to="/products" className={`px-3 py-2 text-sm ${isActive('/products')}`}>Products</Link>
            <Link to="/technology" className={`px-3 py-2 text-sm ${isActive('/technology')}`}>Technology</Link>
            <Link to="/applications" className={`px-3 py-2 text-sm ${isActive('/applications')}`}>Applications</Link>
            <Link to="/contact" className={`px-3 py-2 text-sm ${isActive('/contact')}`}>Contact</Link>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={isAdmin ? "/admin-dashboard" : "/user-dashboard"} 
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-700"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            ) : ( <></>  /*
              <div className="flex items-center space-x-4">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-gray-50">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-700">
                  Sign Up
                </Link>
              </div> 
              */
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 text-base ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`block px-3 py-2 text-base ${isActive('/about')}`}>About Us</Link>
            <Link to="/products" className={`block px-3 py-2 text-base ${isActive('/products')}`}>Products</Link>
            <Link to="/technology" className={`block px-3 py-2 text-base ${isActive('/technology')}`}>Technology</Link>
            <Link to="/applications" className={`block px-3 py-2 text-base ${isActive('/applications')}`}>Applications</Link>
            <Link to="/contact" className={`block px-3 py-2 text-base ${isActive('/contact')}`}>Contact</Link>
            
            {currentUser ? (
              <>
                <Link 
                  to={isAdmin ? "/admin-dashboard" : "/user-dashboard"} 
                  className="block px-3 py-2 text-base text-primary font-medium"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : ( <></>
              /*
              <>
                <Link to="/login" className="block px-3 py-2 text-base text-primary font-medium">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 text-base text-primary font-medium">
                  Sign Up
                </Link>
              </>
              */
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
