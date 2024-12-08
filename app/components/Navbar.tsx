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
    <nav
      style={{
        backgroundColor: '#FFD700', // Gold background for a premium look
        padding: '1rem 2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Section: ShopName */}
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#FF4500', // Vibrant red-orange for prominence
            margin: 0,
            fontFamily: `'Brush Script MT', cursive`, // Fancy handwritten style
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Subtle shadow for a glowing effect
          }}
        >
          ALLAH RAAZI
        </h1>

        {/* Right Section: Search bar and Cart */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            style={{
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              marginRight: '1rem',
              outline: 'none',
            }}
          />

          {/* Cart Icon */}
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <FaShoppingCart size={24} color="#333" />
            <span
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: '#FF4500', // Vibrant red-orange for the cart badge
                color: 'white',
                borderRadius: '50%',
                padding: '0.2rem 0.4rem',
                fontSize: '0.75rem',
                fontWeight: 'bold', // Make the badge text bold
              }}
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
