import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Menu, Search, Globe2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="text-xl font-bold">NyayaSetu</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/learn" className="hover:text-indigo-200 px-3 py-2">
              Learn
            </Link>
            <Link to="/resources" className="hover:text-indigo-200 px-3 py-2">
              Resources
            </Link>
            <Link to="/community" className="hover:text-indigo-200 px-3 py-2">
              Community
            </Link>
            <Link to="/help" className="hover:text-indigo-200 px-3 py-2">
              Get Help
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-indigo-600">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-indigo-600">
              <Globe2 className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-indigo-600">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}