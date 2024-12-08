'use client';

import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing cart icon from react-icons

// Navbar Component
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-yellow-500 p-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Left Section: ShopName */}
        <h1 className="text-2xl font-bold text-orange-600 m-0 font-serif text-shadow-lg">
          ALLAH RAAZI
        </h1>

        {/* Right Section: Search bar and Cart */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart size={24} color="#333" />
            <span
              className="absolute top-0 right-0 bg-orange-600 text-white rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center"
            >
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
