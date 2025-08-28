
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-indigo-600 transition-colors">
              PDF Tool Navigator
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
