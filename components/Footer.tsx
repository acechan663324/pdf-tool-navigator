
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} PDF Tool Navigator. All rights reserved.</p>
        <p className="text-sm mt-1">Discover the best PDF tools on the web.</p>
      </div>
    </footer>
  );
};

export default Footer;
